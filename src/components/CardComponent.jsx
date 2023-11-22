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
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

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
  onDeleteCard,
  onEditCard,
  onLikeCard,
}) => {
  const [isLiked, setIsLiked] = useState(like);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoggedIn = useSelector((store) => store.authSlice.loggedIn);
  const userId = useSelector((store) => store.authSlice.userData?._id);
  const isOwner = userId === user_id;

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleDeleteCardClick = () => {
    onDeleteCard(_id);
  };
  const handleClickEditCard = () => {
    onEditCard(_id);
  };

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
      setIsLiked((prevIsLiked) => !prevIsLiked);
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
              Email:{" "}
            </Typography>
            {email}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <IconButton onClick={handleOpenModal}>
            <InfoIcon />
          </IconButton>
          {isOpenModal && ( // Conditional rendering of the ModalComponent
            <ModalComponent
              open={isOpenModal}
              handleClose={handleCloseModal}
              description={description}
              image={img}
              title={title}
              subtitle={subTitle}
              web={web}
              city={city}
              houseNumber={houseNumber}
              country={country}
              street={street}
              email={email}
              address={address}
            />
          )}
          {isLoggedIn && (
            <Box>
              <IconButton onClick={handleLikeCardClick}>
                <FavoriteIcon sx={{ color: isLiked ? "#A70001" : "" }} />
              </IconButton>
            </Box>
          )}
          {isOwner && isLoggedIn && (
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

export default CardComponent;
