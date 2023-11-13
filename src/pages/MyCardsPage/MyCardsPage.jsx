import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardComponent from "../../components/CardComponent";
import { useSelector } from "react-redux";
import homePageNormalization from "../home/homePageNormalization";
import { current } from "@reduxjs/toolkit";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
const MyCardsPage = () => {
  const [myCards, setMyCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
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
  }, [userData]);
  const handleDeleteCard = () => {};
  const handleEditCard = () => {};

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
