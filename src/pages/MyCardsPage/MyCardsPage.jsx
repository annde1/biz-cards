import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardComponent from "../../components/CardComponent";
import { useSelector } from "react-redux";
import homePageNormalization from "../home/homePageNormalization";
import CircularProgress from "@mui/material/CircularProgress";
import ROUTES from "../../routes/ROUTES";
import { useNavigate } from "react-router-dom";
const MyCardsPage = () => {
  const [myCards, setMyCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasCard, setHasCards] = useState("");
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const navigate = useNavigate();
  useEffect(() => {
    const getMyCards = async () => {
      try {
        const { data } = await axios.get("/cards/my-cards");
        console.log(data);
        if (userData) homePageNormalization(data, userData._id);
        setMyCards(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMyCards();
  }, [userData, myCards.length]);
  const handleDeleteCard = async (_id) => {
    try {
      const { data } = await axios.delete("/cards/" + _id);
      console.log("Card Deleted From My Cards", data);
      setMyCards((myCardsCopy) =>
        myCardsCopy.filter((card) => card._id !== _id)
      );
    } catch (err) {
      console.log("Error From Delete Card", err);
    }
  };
  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };
  const handleLikeCard = async (_id, cardDetails) => {
    try {
      const { data } = await axios.patch("/cards/" + _id, cardDetails);
      console.log("Data from Like Card", data);
    } catch (err) {
      console.log("Error from like card", err);
    }
  };

  return (
    <>
      <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
        <Typography variant="h4">My Cards</Typography>
        <Typography variant="body2" sx={{ marginBottom: "3rem" }}>
          Here you can see all of your cards
        </Typography>
        {isLoading && (
          <Box sx={{ width: "100%" }}>
            <CircularProgress />
          </Box>
        )}

        <Container>
          {myCards.length === 0 && !isLoading && (
            <Typography variant="body2" sx={{ marginTop: "1rem" }}>
              You don't have any cards yet.
            </Typography>
          )}
          <Grid container spacing={2} justifyContent="center">
            {myCards.map((card) => (
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
      </Box>
    </>
  );
};
export default MyCardsPage;
