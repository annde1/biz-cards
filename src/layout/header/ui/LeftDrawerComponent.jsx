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
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "#f3f1f0",
      }}
      role="presentation"
      onClick={onCloseDrawer}
      onKeyDown={onCloseDrawer}
    >
      <Typography
        variant="body1"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        Profile
      </Typography>
      <Divider
        sx={{ marginLeft: "1rem", marginRight: "1rem", marginTop: "1rem" }}
      />
      <List>
        {isLoggedIn &&
          profileLinks.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton component={Link} to={link.to}>
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
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        Cards
      </Typography>
      <Divider
        sx={{ marginLeft: "1rem", marginRight: "1rem", marginTop: "1rem" }}
      />
      <List>
        {isBusiness &&
          isLoggedIn &&
          cardsLinkBusiness.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton component={Link} to={link.to}>
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
              <ListItemButton component={Link} to={link.to}>
                <ListItemText primary={link.children} />
                {getIcon(link.to)}
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Typography
        variant="body1"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        Main
      </Typography>
      <Divider
        sx={{ marginLeft: "1rem", marginRight: "1rem", marginTop: "1rem" }}
      />
      <List>
        {alwaysLinks.map((link) => (
          <ListItem key={link.to} disablePadding>
            <ListItemButton component={Link} to={link.to}>
              <ListItemText primary={link.children} />
              {getIcon(link.to)}
            </ListItemButton>
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
