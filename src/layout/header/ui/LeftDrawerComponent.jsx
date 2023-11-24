import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import {
  profileLinks,
  cardsLinkBusiness,
  alwaysLinks,
  cardsLinkRegular,
} from "../../myLinks";
import { useSelector } from "react-redux";
import getIcon from "../../../service/iconsService";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import "../../../App.css";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer, isDarkTheme }) => {
  const isLoggedIn = useSelector((store) => store.authSlice.loggedIn);
  const isBusiness = useSelector(
    (store) => store.authSlice.userData?.isBusiness
  );
  const isAdmin = useSelector((store) => store.authSlice.userData?.isAdmin);
  const list = () => (
    <Box
      sx={{
        width: 200,
        display: "flex",
        flexShrink: 0,
        flexDirection: "column",
        height: "100%",
        bgcolor: isDarkTheme ? "#121212" : "#483078",
      }}
      role="presentation"
      onClick={onCloseDrawer}
      onKeyDown={onCloseDrawer}
    >
      <Typography
        variant="body1"
        style={{ textAlign: "center", marginTop: "1rem", color: "white" }}
      >
        Profile
      </Typography>
      <Divider
        sx={{
          marginLeft: "1rem",
          marginRight: "1rem",
          marginTop: "1rem",
          color: "white",
        }}
      />
      <List>
        {profileLinks(isLoggedIn, isAdmin).map((link) => (
          <ListItem key={link.to} disablePadding className="listItemLink">
            <NavLink component={Link} to={link.to} className="navLink">
              <ListItemText
                primary={link.children}
                sx={{ marginLeft: "1rem", marginBottom: "1rem" }}
              />
              {getIcon(link.to)}
            </NavLink>
          </ListItem>
        ))}
      </List>
      {isBusiness && isLoggedIn && (
        <>
          <Typography
            variant="body1"
            style={{ textAlign: "center", marginTop: "1rem", color: "white" }}
          >
            Cards
          </Typography>
          <Divider
            sx={{
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "1rem",
              color: "white",
            }}
          />
          <List>
            {cardsLinkBusiness.map((link) => (
              <ListItem key={link.to} disablePadding className="listItemLink">
                <NavLink component={Link} to={link.to} className="navLink">
                  <ListItemText
                    primary={link.children}
                    sx={{ marginLeft: "1rem", marginBottom: "1rem" }}
                  />
                  {getIcon(link.to)}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {isLoggedIn && !isBusiness && (
        <>
          <Typography
            variant="body1"
            style={{ textAlign: "center", marginTop: "1rem", color: "white" }}
          >
            Cards
          </Typography>
          <Divider
            sx={{
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "1rem",
              color: "white",
            }}
          />
          <List>
            {cardsLinkRegular.map((link) => (
              <ListItem key={link.to} disablePadding className="listItemLink">
                <NavLink component={Link} to={link.to} className="navLink">
                  <ListItemText
                    primary={link.children}
                    sx={{ marginLeft: "1rem", marginBottom: "1rem" }}
                  />
                  {getIcon(link.to)}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Typography
        variant="body1"
        style={{ textAlign: "center", marginTop: "1rem", color: "white" }}
      >
        Main
      </Typography>
      <Divider
        sx={{
          marginLeft: "1rem",
          marginRight: "1rem",
          marginTop: "1rem",
          color: "white",
        }}
      />
      <List>
        {alwaysLinks.map((link) => (
          <ListItem key={link.to} disablePadding className="listItemLink">
            <NavLink component={Link} to={link.to} className="navLink">
              <ListItemText
                primary={link.children}
                sx={{ marginLeft: "1rem", marginBottom: "1rem" }}
              />
              {getIcon(link.to)}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={isOpen} onClose={onCloseDrawer}>
      {list()}
    </Drawer>
  );
};

export default LeftDrawerComponent;
