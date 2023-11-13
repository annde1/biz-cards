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

import { Link } from "react-router-dom";
import nextKey from "generate-my-key";
import ROUTES from "../../routes/ROUTES";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
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
            style={{
              backgroundColor: "#483078",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
          >
            <BottomNavigationAction
              label="Favorites"
              icon={<FavoriteIcon style={{ color: "#f9f8f7" }} />}
              to={ROUTES.FAVORITE}
              component={Link}
              style={{ color: "#f9f8f7" }}
            />

            <BottomNavigationAction
              label="About"
              icon={<InfoIcon style={{ color: "#f9f8f7" }} />}
              component={Link}
              to={ROUTES.ABOUT}
              style={{ color: "#f9f8f7" }}
            />

            <BottomNavigationAction
              label="My Cards"
              icon={<BusinessCenterIcon style={{ color: "#f9f8f7" }} />}
              to={ROUTES.MYCARDS}
              component={Link}
              style={{ color: "#f9f8f7" }}
            />
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
            style={{
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}

            // className={styles.bottomNav}
          >
            <BottomNavigationAction
              label="About"
              to={ROUTES.ABOUT}
              icon={<InfoIcon />}
            />
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
            style={{
              backgroundColor: "#483078",
              paddingTop: "3rem",
              paddingBottom: "3rem",
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
