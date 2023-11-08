import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardComponent from "../../components/CardComponent";

const FavoritesPage = () => {
  const [likedCards, setLikedCards] = useState([]);
  const userId = useSelector((store) => store.authSlice.userData?._id);
  console.log(userId);
  useEffect(() => {
    const getCards = async () => {
      try {
        const { data } = await axios.get("/cards/");
        console.log(data);
        const likedCards = data.filter((card) => card.likes.includes(userId));
        console.log(likedCards);
        setLikedCards(likedCards);
        console.log(likedCards);
      } catch (err) {
        console.log(err);
      }
    };
    getCards();
  }, [userId]);

  const handleDeleteCard = () => {};
  const handleEditCard = () => {};
  return (
    <>
      <Typography variant="h2">Favorite Cards</Typography>
      <Typography variant="body1">
        Here you can find your favorite bussiness cards
      </Typography>
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
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default FavoritesPage;
