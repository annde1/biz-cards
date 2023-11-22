import { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { validateCard } from "../../validation/cardValidation";
import { normalizeCardData } from "../CreateCardPage/normalizeCardData";
import { successToast, warningToast } from "../../service/toastifyService";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const EditCardPage = () => {
  const [inputsValue, setInputValue] = useState({
    title: "",
    subtitle: "",
    phone: "",
    email: "",
    description: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  const [fetchedCardData, setFetchedCardData] = useState(null);
  const [error, setError] = useState({});
  const { id: _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCardById = async () => {
      try {
        const { data } = await axios.get("/cards/" + _id);
        setFetchedCardData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCardById();
  }, [_id]);

  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleUpdateChangesClick = async (e) => {
    try {
      e.preventDefault();
      const errors = validateCard(inputsValue);
      console.log(errors);
      setError(errors);
      if (errors) return;
      const normalizedCardData = normalizeCardData(inputsValue);
      await axios.put("/cards/" + _id, normalizedCardData);
      successToast("Card updated successfully!");
      navigate(ROUTES.HOME);
    } catch (err) {
      // console.log("err", err.response);
      warningToast("Could not update the card");
    }
  };
  const getPlaceholderValue = (fieldName) => {
    const value =
      fetchedCardData && fetchedCardData[fieldName]
        ? fetchedCardData[fieldName]
        : "";
    return value;
  };
  return (
    <Container sx={{ padding: "50px" }}>
      <Typography
        variant="h2"
        sx={{ mb: 1, padding: "10px", pb: "0px", textAlign: "center" }}
      >
        Card - Edit
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 2, padding: "3px", ml: "7px", textAlign: "center" }}
      >
        Please type new values below to edit the card
      </Typography>

      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.title}
            placeholder={getPlaceholderValue("title")}
            required
          />
          {error && error.title && (
            <Alert severity="warning">{error.title}</Alert>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="subtitle"
            label="Subtitle"
            variant="outlined"
            def
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.subtitle}
            placeholder={getPlaceholderValue("subtitle")}
            required
          />
          {error && error.subtitle && (
            <Alert severity="warning">{error.subtitle}</Alert>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="phone"
            label="Phone Number"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.phone}
            placeholder={getPlaceholderValue("phone")}
            required
          />
          {error && error.phone && (
            <Alert severity="warning">{error.phone}</Alert>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.description}
            placeholder={getPlaceholderValue("description")}
            required
          />
          {error && error.description && (
            <Alert severity="warning">{error.description}</Alert>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="web"
            label="Web"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.web}
            placeholder={getPlaceholderValue("web")}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.email}
            placeholder={getPlaceholderValue("email")}
            required
          />
          {error && error.email && (
            <Alert severity="warning">{error.email}</Alert>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="url"
            label="Url"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.url}
            placeholder={getPlaceholderValue("url")}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="alt"
            label="Alt"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.alt}
            placeholder={getPlaceholderValue("alt")}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="state"
            label="State"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.state}
            placeholder={getPlaceholderValue("state")}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.country}
            placeholder={getPlaceholderValue("country")}
            required
          />
          {error && error.country && (
            <Alert severity="warning">{error.country}</Alert>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.city}
            placeholder={getPlaceholderValue("city")}
            required
          />
          {error && error.city && (
            <Alert severity="warning">{error.city}</Alert>
          )}
        </Grid>
        {/*TODO: extract one like this into a component (InputComponent) pass as props the error */}
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="street"
            label="Street"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.street}
            placeholder={getPlaceholderValue("street")}
            required
          />
          {error && error.street && (
            <Alert severity="warning">{error.street}</Alert>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="houseNumber"
            label="House Number"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.houseNumber}
            placeholder={getPlaceholderValue("houseNumber")}
            required
          />
          {error && error.houseNumber && (
            <Alert severity="warning">{error.houseNumber}</Alert>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="zip"
            label="Zip"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            placeholder={getPlaceholderValue("zip")}
            value={inputsValue.zip}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            className="btn"
            onClick={handleUpdateChangesClick}
          >
            Update Changes
          </Button>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Link to={ROUTES.HOME}>
            <Button variant="contained" className="btn" sx={{ mt: 2 }}>
              Discard Changes
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
export default EditCardPage;
