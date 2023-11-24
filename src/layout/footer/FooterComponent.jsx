import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { useSelector } from "react-redux";
const FooterComponent = ({ isDarkTheme }) => {
  const [value, setValue] = useState(0);
  const isLoggedIn = useSelector((store) => store.authSlice.loggedIn);
  const isBusiness = useSelector(
    (store) => store.authSlice.userData?.isBusiness
  );
  const isAdmin = useSelector((store) => store.authSlice.userData?.isAdmin);

  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      {isLoggedIn && isBusiness && !isAdmin && (
        <>
          <Divider></Divider>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            style={{
              backgroundColor: isDarkTheme ? "#2D2D2D" : "#483078",
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
              backgroundColor: isDarkTheme ? "#2D2D2D" : "#483078",
            }}
          >
            <BottomNavigationAction
              label="About"
              to={ROUTES.ABOUT}
              component={Link}
              icon={<InfoIcon style={{ color: "#f9f8f7" }} />}
              style={{ color: "#f9f8f7" }}
            />
          </BottomNavigation>
        </>
      )}
      {isLoggedIn && !isBusiness && !isAdmin && (
        <>
          <Divider></Divider>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            style={{
              backgroundColor: isDarkTheme ? "#2D2D2D" : "#483078",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
          >
            <BottomNavigationAction
              label="Favorites"
              to={ROUTES.FAVORITE}
              component={Link}
              icon={<FavoriteIcon style={{ color: "#f9f8f7" }} />}
              style={{ color: "#f9f8f7" }}
            />

            <BottomNavigationAction
              label="About"
              to={ROUTES.ABOUT}
              component={Link}
              icon={<InfoIcon style={{ color: "#f9f8f7" }} />}
              style={{ color: "#f9f8f7" }}
            />
          </BottomNavigation>
        </>
      )}
      {isLoggedIn && isAdmin && isBusiness && (
        <>
          <Divider></Divider>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            style={{
              backgroundColor: isDarkTheme ? "#2D2D2D" : "#483078",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
          >
            <BottomNavigationAction
              label="Favorites"
              to={ROUTES.FAVORITE}
              component={Link}
              icon={<FavoriteIcon style={{ color: "#f9f8f7" }} />}
              style={{ color: "#f9f8f7" }}
            />
            <BottomNavigationAction
              label="My Cards"
              icon={<BusinessCenterIcon style={{ color: "#f9f8f7" }} />}
              to={ROUTES.MYCARDS}
              component={Link}
              style={{ color: "#f9f8f7" }}
            />

            <BottomNavigationAction
              label="About"
              to={ROUTES.ABOUT}
              component={Link}
              icon={<InfoIcon style={{ color: "#f9f8f7" }} />}
              style={{ color: "#f9f8f7" }}
            />

            <BottomNavigationAction
              label="CRM"
              to={ROUTES.CRM}
              component={Link}
              icon={<PeopleAltIcon style={{ color: "#f9f8f7" }} />}
              style={{ color: "#f9f8f7" }}
            />
          </BottomNavigation>
        </>
      )}
    </div>
  );
};

export default FooterComponent;
