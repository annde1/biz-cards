import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { normalizeData } from "./normalizeData";
import { validateRegister } from "../../validation/registerValidation";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { Alert } from "@mui/material";
import { registerToast } from "../../service/toastifyService";
import { successfullRegistration } from "../../service/toastifyService";

const RegisterPage = () => {
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    isBusiness: true,
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleInputsChange = (e) => {
    //step 4
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setInputsValue((curr) => ({
      ...curr,
      isBusiness: e.target.checked,
    }));
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const errors = validateRegister(inputsValue);
      setError(errors);
      if (errors) return;
      let request = normalizeData(inputsValue);
      const { data } = await axios.post("/users", request);
      console.log("data", data);
      console.log(data.response.data);
      successfullRegistration();
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      registerToast(err.response.data);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, backgroundColor: "#483078" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={inputsValue.email}
              onChange={handleInputsChange}
            />
            {error && error.email && (
              <Alert severity="warning">{error.email}</Alert>
            )}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={inputsValue.password}
              onChange={handleInputsChange}
            />
            {error && error.password && (
              <Alert severity="warning">{error.password}</Alert>
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
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputsValue.isBusiness}
                  onChange={handleCheckboxChange}
                  color="primary"
                />
              }
              label="Business Account"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "#483078", color: "white" }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2" style={{ color: "#716f6d" }}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RegisterPage;
