import { List, ListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AccordionComponent from "../../components/Acordion";
import "../../App.css";

const AboutPage = () => {
  return (
    <>
      <Box style={{ textAlign: "center", marginTop: "3rem" }}>
        <Typography variant="h3">About Page</Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "2rem", marginTop: "1rem" }}
        >
          Welcome to our platform where businesses can showcase their business
          cards, and users can explore and connect! Our platform is designed to
          provide a seamless experience for both businesses and users.
        </Typography>
      </Box>
      <AccordionComponent title="How to register">
        To get started, register for an account on our platform. Click on the
        "Register" button and follow the simple registration process. Make sure
        to provide accurate information to enhance your experience.
      </AccordionComponent>
      <AccordionComponent title="Profile information">
        <List>
          <ListItem disablePadding>
            Update your personal information, excluding email and password.
          </ListItem>
          <ListItem disablePadding>
            View detailed information about your profile, including your created
            business cards.
          </ListItem>
        </List>
      </AccordionComponent>
      <AccordionComponent title="Card Information">
        <List>
          <ListItem disablePadding>
            Access and manage your own business cards.
          </ListItem>
          <ListItem disablePadding>
            Create a new business card to showcase your business.
          </ListItem>
          <ListItem disablePadding>
            Edit and delete cards that you've created.
          </ListItem>
        </List>
      </AccordionComponent>
    </>
  );
};

export default AboutPage;
