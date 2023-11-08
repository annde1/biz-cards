import { Fragment, useState } from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import myLinks from "../myLinks";
import NavLinkComponent from "../header/NavLinkComponent";
import { Link } from "react-router-dom";
import nextKey from "generate-my-key";
import ROUTES from "../../routes/ROUTES";
import { useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import Box from "@mui/material";

const FooterComponent = () => {
  const [value, setValue] = useState(0);
  const isLoggedIn = useSelector((store) => store.authSlice.loggedIn);
  const isBusiness = useSelector(
    (store) => store.authSlice.userData?.isBusiness
  );

  return (
    <div style={{ marginTop: "3rem" }}>
      {isLoggedIn && isBusiness && (
        <>
          <Divider></Divider>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to={ROUTES.FAVORITE}>
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
            </Link>
            <Link to={ROUTES.ABOUT}>
              <BottomNavigationAction label="About" icon={<InfoIcon />} />
            </Link>
            <Link to={ROUTES.MYCARDS}>
              <BottomNavigationAction
                label="My Cards"
                icon={<BusinessCenterIcon />}
              />
            </Link>
          </BottomNavigation>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Divider></Divider>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to={ROUTES.ABOUT}>
              <BottomNavigationAction label="About" icon={<InfoIcon />} />
            </Link>
          </BottomNavigation>
        </>
      )}
      {isLoggedIn && !isBusiness && (
        <>
          <Divider></Divider>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to={ROUTES.FAVORITE}>
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
            </Link>
            <Link to={ROUTES.ABOUT}>
              <BottomNavigationAction label="About" icon={<InfoIcon />} />
            </Link>
          </BottomNavigation>
        </>
      )}
    </div>
  );
};

export default FooterComponent;
