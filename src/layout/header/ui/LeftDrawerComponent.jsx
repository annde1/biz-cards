import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  Drawer,
  ListItemIcon,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState, Fragment } from "react";
import {
  loggedInLinks,
  loggedOutLinks,
  businessLinks,
  alwaysLinks,
} from "../../myLinks";
import { useSelector } from "react-redux";
import nextKey from "generate-my-key";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  const isLoggedIn = useSelector((store) => store.authSlice.loggedIn);
  const isBusiness = useSelector(
    (store) => store.authSlice.userData?.isBusiness
  );
  console.log(isLoggedIn);
  console.log(isBusiness);
  const list = () => (
    <Box
      sx={{ width: { auto: 550 } }}
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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
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
