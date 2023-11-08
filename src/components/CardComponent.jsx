import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
import { current } from "@reduxjs/toolkit";

const CardComponent = ({
  _id,
  user_id,
  title,
  subTitle,
  description,
  phone,
  address,
  email,
  web,
  img,
  city,
  street,
  country,
  houseNumber,
  state,
  zip,
  alt,
  like,
  cardNumber,
  onDeleteCard,
  onEditCard,
  onLikeCard,
}) => {
  const [isLiked, setIsLiked] = useState(like);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoggedIn = useSelector((store) => store.authSlice.loggedIn);
  const userId = useSelector((store) => store.authSlice.userData?._id);
  const isOwner = userId === user_id;
  // console.log(like);
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleDeleteCardClick = () => {
    console.log("_id to delete (CardComponent)", _id);
    onDeleteCard(_id);
  };
  const handleClickEditCard = () => {
    // console.log("move to edit card page");
    onEditCard(_id);
  };
  //TODO: Finish
  const handleLikeCardClick = async () => {
    const cardDetails = {
      title: title,
      subtitle: subTitle,
      description: description,
      phone: phone,
      email: email,
      web: web,
      image: {
        url: img,
        alt: alt,
      },
      address: {
        state: state,
        county: country,
        city: city,
        street: street,
        houseNumber: houseNumber,
        zip: zip,
      },
    };
    try {
      await onLikeCard(_id, cardDetails);
      setIsLiked((current) => !current);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={img} alt={alt} />
      </CardActionArea>
      <CardContent>
        <CardHeader title={title} subheader={subTitle} sx={{ p: 0, mb: 1 }} />
        <Divider />
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Phone:{" "}
            </Typography>
            {phone}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Address:{" "}
            </Typography>
            {address}
          </Typography>
          <Typography variant="body2">
            <Typography fontWeight="700" variant="subtitle1" component="span">
              Card Number:{_id}
            </Typography>
            {cardNumber}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <IconButton onClick={handleOpenModal}>
            <InfoIcon />
          </IconButton>
          {isOpenModal && ( // Conditional rendering of the ModalComponent
            <ModalComponent open={isOpenModal} handleClose={handleCloseModal} />
          )}
          {isLoggedIn && (
            <Box>
              <IconButton onClick={handleLikeCardClick}>
                <FavoriteIcon color={isLiked ? "favActive" : ""} />
              </IconButton>
            </Box>
          )}
          {isOwner && (
            <Box>
              <IconButton onClick={handleDeleteCardClick}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={handleClickEditCard}>
                <CreateIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  like: PropTypes.bool,
  cardNumber: PropTypes.number,
  onDeleteCard: PropTypes.func.isRequired,
  onEditCard: PropTypes.func.isRequired,
};
CardComponent.defaultProps = {
  img: "https://www.livemint.com/lm-img/img/2023/08/14/1600x900/garena_free_fire_max_1688877791610_1691982307589.jpg",
  alt: "running",
};

export default CardComponent;
