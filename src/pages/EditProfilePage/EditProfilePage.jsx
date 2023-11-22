import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { validateEditProfile } from "../../validation/editProfileValidation";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { Alert } from "@mui/material";
import { normalizeProfileData } from "./nomralizeEditProfile";
import {
  updateProfileToast,
  warningToast,
} from "../../service/toastifyService";
import { useSelector } from "react-redux";
import "../../App.css";

const EditProfilePage = () => {
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();
  const userData = useSelector((store) => store.authSlice.userData);
  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    try {
      e.preventDefault();
      const errors = validateEditProfile(inputsValue);
      console.log(errors);
      setError(errors);
      let request = normalizeProfileData(inputsValue);
      if (errors) return;
      if (userData) {
        await axios.put("/users/" + userData._id, request);
        updateProfileToast();
        navigate(ROUTES.HOME);
      }
    } catch (err) {
      console.log("Error from edit profile", err);
      warningToast("Could not update profile");
    }
  };
  return (
    <Box className="container">
      <Avatar sx={{ m: 1, bgcolor: "#483078" }}>
        <EditNoteIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Edit Profile
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              autoComplete="given-name"
              name="first"
              required
              fullWidth
              id="first"
              label="First Name"
              autoFocus
              value={inputsValue.first}
              onChange={handleInputsChange}
            />
            {error && error.first && (
              <Alert severity="warning">{error.first}</Alert>
            )}
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              autoComplete="given-name"
              name="middle"
              fullWidth
              id="middle"
              label="Middle Name"
              autoFocus
              value={inputsValue.middle}
              onChange={handleInputsChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              id="last"
              label="Last Name"
              name="last"
              autoComplete="family-name"
              value={inputsValue.last}
              onChange={handleInputsChange}
            />
            {error && error.last && (
              <Alert severity="warning">{error.last}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              name="phone"
              label="Phone"
              id="phone"
              autoComplete="new-phone"
              value={inputsValue.phone}
              onChange={handleInputsChange}
            />
            {error && error.phone && (
              <Alert severity="warning">{error.phone}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              fullWidth
              name="url"
              label="Url"
              id="url"
              autoComplete="new-url"
              value={inputsValue.url}
              onChange={handleInputsChange}
            />
            {error && error.url && (
              <Alert severity="warning">{error.url}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              fullWidth
              name="alt"
              label="Alt"
              id="alt"
              autoComplete="new-alt"
              value={inputsValue.alt}
              onChange={handleInputsChange}
            />
            {error && error.alt && (
              <Alert severity="warning">{error.alt}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              fullWidth
              name="state"
              label="State"
              id="state"
              autoComplete="new-state"
              value={inputsValue.state}
              onChange={handleInputsChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              name="country"
              label="Country"
              id="country"
              autoComplete="new-country"
              value={inputsValue.country}
              onChange={handleInputsChange}
            />
            {error && error.country && (
              <Alert severity="warning">{error.country}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              name="city"
              label="City"
              id="city"
              autoComplete="new-city"
              value={inputsValue.city}
              onChange={handleInputsChange}
            />
            {error && error.city && (
              <Alert severity="warning">{error.city}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              name="street"
              label="Street"
              id="street"
              autoComplete="new-street"
              value={inputsValue.street}
              onChange={handleInputsChange}
            />
            {error && error.street && (
              <Alert severity="warning">{error.street}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              name="houseNumber"
              label="House Number"
              id="houseNumber"
              autoComplete="new-houseNumber"
              value={inputsValue.houseNumber}
              onChange={handleInputsChange}
            />
            {error && error.houseNumber && (
              <Alert severity="warning">{error.houseNumber}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              fullWidth
              name="zip"
              label="Zip"
              id="zip"
              autoComplete="new-zip"
              value={inputsValue.zip}
              onChange={handleInputsChange}
            />
            {error && error.zip && (
              <Alert severity="warning">{error.zip}</Alert>
            )}
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "#483078" }}
          onClick={handleUpdateProfile}
        >
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};
export default EditProfilePage;
