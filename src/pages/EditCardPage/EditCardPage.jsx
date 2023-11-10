import { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";

const EditCardPage = () => {
  const [inputsValue, setInputValue] = useState({
    title: "",
    subtitle: "",
    phone: "",
    add: "",
    mail: "",
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
  const { id: _id } = useParams();
  console.log(_id);
  useEffect(() => {
    const getCardById = async () => {
      try {
        const { data } = await axios.get("/cards/" + _id);
        console.log(data);
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
  const handleUpdateChangesClick = async () => {
    //TODO: normalization for data
    try {
      const { data } = await axios.put("/cards/" + _id, {
        title: inputsValue.title,
        subtitle: inputsValue.subtitle,
        description: inputsValue.description,
        phone: inputsValue.phone,
        email: inputsValue.mail,
        web: inputsValue.web,
        image: {
          url: inputsValue.url,
          alt: inputsValue.alt,
        },
        address: {
          state: inputsValue.state,
          country: inputsValue.country,
          city: inputsValue.city,
          street: inputsValue.street,
          houseNumber: inputsValue.houseNumber,
          zip: +inputsValue.zip,
        },
      });
      console.log("data from response", data);
    } catch (err) {
      console.log("err", err.response);
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
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="subtitle"
            label="SubTitle"
            variant="outlined"
            def
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.subtitle}
            placeholder={getPlaceholderValue("subtitle")}
            required
          />
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
            id="mail"
            label="Email"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.mail}
            placeholder={getPlaceholderValue("email")}
            required
          />
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
        </Grid>
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
            sx={{
              mt: 2,
              width: "100%",
              ml: "0%",
              bgcolor: "#716f6d",
              color: "white",
            }}
            onClick={handleUpdateChangesClick}
          >
            Update Changes
          </Button>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Link to={ROUTES.HOME}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                width: "100%",
                ml: "0%",
                bgcolor: "#716f6d",
                color: "white",
              }}
            >
              Discard Changes
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
export default EditCardPage;
