import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  Drawer,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  profileLinks,
  loggedOutProfileLinks,
  cardsLinkBusiness,
  cardsLinkNotBusiness,
  alwaysLinks,
} from "../../myLinks";
import { useSelector } from "react-redux";
import nextKey from "generate-my-key";
import getIcon from "../../../service/iconsService";
import Link from "@mui/material/Link";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  const isLoggedIn = useSelector((store) => store.authSlice.loggedIn);
  const isBusiness = useSelector(
    (store) => store.authSlice.userData?.isBusiness
  );
  console.log(isLoggedIn);
  console.log(isBusiness);
  const list = () => (
    <Box
      sx={{
        width: 200,
        display: "flex",
        flexShrink: 0,
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "#34488A",
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
        {isLoggedIn &&
          profileLinks.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton
                component={Link}
                to={link.to}
                sx={{ color: "white" }}
              >
                <ListItemText primary={link.children} />
                {getIcon(link.to)}
              </ListItemButton>
            </ListItem>
          ))}
        {!isLoggedIn &&
          loggedOutProfileLinks.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton component={Link} to={link.to}>
                <ListItemText primary={link.children} />
                {getIcon(link.to)}
              </ListItemButton>
            </ListItem>
          ))}
      </List>
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
        {isBusiness &&
          isLoggedIn &&
          cardsLinkBusiness.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton
                component={Link}
                to={link.to}
                sx={{ color: "white" }}
              >
                <ListItemText primary={link.children} />
                {getIcon(link.to)}
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <List>
        {!isBusiness &&
          isLoggedIn &&
          cardsLinkNotBusiness.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton
                component={Link}
                to={link.to}
                sx={{ color: "white" }}
              >
                <ListItemText primary={link.children} />
                {getIcon(link.to)}
              </ListItemButton>
            </ListItem>
          ))}
      </List>
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
          <ListItem key={link.to} disablePadding>
            <ListItemButton
              component={Link}
              to={link.to}
              sx={{ color: "white" }}
            >
              <ListItemText primary={link.children} />
              {getIcon(link.to)}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onCloseDrawer}
      style={{ height: "100%", minHeight: "100vh" }}
    >
      {list()}
    </Drawer>
  );
};

export default LeftDrawerComponent;
