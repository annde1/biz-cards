import { useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { cardCratedToast } from "../../service/toastifyService";
import Box from "@mui/material/Box";

const CreateCardPage = () => {
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

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleUpdateChangesClick = async () => {
    try {
      const { data } = await axios.post("/cards", {
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
      cardCratedToast();
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log("err", err.response);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 1, padding: "10px", pb: "0px" }}>
        Create Card
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, padding: "3px", ml: "7px" }}>
        Add card details below to create new card
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.title}
            required
          />
          <TextField
            id="subtitle"
            label="Subtitle"
            variant="outlined"
            sx={{ width: "100%", mt: "10px" }}
            onChange={handleInputChange}
            value={inputsValue.subtitle}
            required
          />
          <TextField
            id="phone"
            label="Phone Number"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.phone}
            required
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.description}
            required
          />
          <TextField
            id="web"
            label="Web"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.web}
          />
          <TextField
            id="mail"
            label="Email"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.mail}
            required
          />
          <TextField
            id="url"
            label="Url"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.url}
          />
        </Grid>

        {/* Second Column */}
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="alt"
            label="Alt"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.alt}
          />
          <TextField
            id="state"
            label="State"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.state}
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.country}
            required
          />
          <TextField
            id="city"
            label="City"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.city}
            required
          />
          <TextField
            id="street"
            label="Street"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.street}
            required
          />
          <TextField
            id="houseNumber"
            label="House Number"
            variant="outlined"
            sx={{ mt: "10px", width: "100%" }}
            onChange={handleInputChange}
            value={inputsValue.houseNumber}
            required
          />
          <TextField
            id="zip"
            label="Zip"
            variant="outlined"
            sx={{ width: "100%", mt: "10px" }}
            onChange={handleInputChange}
            value={inputsValue.zip}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: "100%",
              ml: "0%",

              color: "white",
            }}
            onClick={handleUpdateChangesClick}
          >
            Update Changes
          </Button>
        </Grid>
        <Grid item xs>
          <Link to={ROUTES.HOME}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                width: "100%",
                ml: "0%",

                color: "WHITE",
              }}
            >
              Discard Changes
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CreateCardPage;
