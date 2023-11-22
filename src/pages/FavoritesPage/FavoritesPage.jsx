import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardComponent from "../../components/CardComponent";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { cardDeletedToast } from "../../service/toastifyService";
import "../../App.css";
import { warningToast } from "../../service/toastifyService";

const FavoritesPage = () => {
  const [likedCards, setLikedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useSelector((store) => store.authSlice.userData?._id);
  const navigate = useNavigate();
  useEffect(() => {
    const getCards = async () => {
      try {
        const { data } = await axios.get("/cards/");
        const likedCards = data.filter((card) => card.likes.includes(userId));
        setLikedCards(likedCards);
        setIsLoading(false);
      } catch (err) {
        // console.log(err);
        warningToast("Something went wrong. Could not get favorite cards");
      }
    };
    getCards();
  }, [userId]);

  const handleDeleteCard = async (_id) => {
    try {
      await axios.delete("/cards/" + _id);
      setLikedCards((likedCardsCopy) =>
        likedCardsCopy.filter((card) => card._id !== _id)
      );
      cardDeletedToast();
    } catch (err) {
      // console.log("Error From Delete Card", err);
      warningToast("Something went wronf. Could not delete the card.");
    }
  };
  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };
  const handleLikeCard = async (_id, cardDetails) => {
    try {
      await axios.patch("/cards/" + _id, cardDetails);
      setLikedCards((likedCardsCopy) =>
        likedCardsCopy.filter((card) => card._id !== _id)
      );
      cardDeletedToast();
    } catch (err) {
      console.log("Error from like card", err);
      warningToast("Something went wrong. Could not like the card.");
    }
  };
  return (
    <>
      <Box
        sx={{ marginTop: "3rem", marginBottom: "3rem", textAlign: "center" }}
      >
        <Typography variant="h3" sx={{ color: "#2d2c2b" }}>
          Favorite Cards
        </Typography>
        <Typography variant="body1">
          Here you can find your favorite bussiness cards
        </Typography>
      </Box>
      {isLoading && (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && likedCards.length === 0 && (
        <Typography className="centerText">
          You don't have any liked crads
        </Typography>
      )}
      <Container>
        <Grid container spacing={2} justifyContent="center">
          {likedCards.map((card) => (
            <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
              <CardComponent
                _id={card._id}
                user_id={card.user_id}
                title={card.title}
                subTitle={card.subtitle}
                phone={card.phone}
                description={card.description}
                email={card.email}
                address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}, ${card.address.state}`}
                city={card.address.city}
                street={card.address.street}
                houseNumber={card.address.houseNumber}
                state={card.address.state}
                zip={card.address.zip}
                img={card.image.url}
                alt={card.image.alt}
                web={card.web}
                like={card.likes}
                cardNumber={card.cardNumber}
                onDeleteCard={handleDeleteCard}
                onEditCard={handleEditCard}
                onLikeCard={handleLikeCard}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default FavoritesPage;
