import { useEffect, useRef, useState } from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import homePageNormalization from "./homePageNormalization";
import { useSelector } from "react-redux";
import useQueryParams from "../../hooks/useQueryParams";

let initialDataFromServer = [];
// let likedCards = [];

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  // console.log(userData);
  const query = useQueryParams();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        // console.log("The data is: ", data);
        if (userData) {
          // If user is logged in mutate the data (likes --> boolean)
          // likedCards = data
          //   .filter((card) => card.likes.includes(userData._id))
          //   .map((card) => card._id);
          data = homePageNormalization(data, userData._id);
          // setLikedCards(likedCardz);
        }
        return data;
      })
      .then((data) => {
        // console.log(data);
        initialDataFromServer = data;
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [userData]);
  useEffect(() => {
    if (!initialDataFromServer.length) return;
    const filter = query.filter ? query.filter : "";
    // console.log("filter", filter);
    setDataFromServer(
      initialDataFromServer.filter((card) => card.title.startsWith(filter))
    );
  }, [query]);
  const handleDeleteCard = async (_id) => {
    try {
      const { data } = await axios.delete("/cards/" + _id);
      console.log("Card Deleted", data);
      setDataFromServer((dataFromServerCopy) =>
        dataFromServerCopy.filter((card) => card._id !== _id)
      );
    } catch (err) {
      console.log("Error From Delete Card", err);
    }
  };
  const handleEditCard = (_id) => {
    // console.log("id to edit", _id);
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
    <Container>
      <Grid container spacing={2}>
        {dataFromServer.map((card) => (
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
  );
};

export default HomePage;
