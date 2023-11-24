import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Switch } from "@mui/material";
import ProfileIconComponent from "./ui/ProfileIconComponent";
import LeftDrawerComponent from "./ui/LeftDrawerComponent";
import { useState } from "react";
import FilterComponent from "./ui/FilterComponent";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import { clearToken } from "../../service/storageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { useEffect } from "react";
import axios from "axios";
import MobileMenu from "./ui/MobileMenu";
import { normalizeUserName } from "./nomralizeUserName";
const HeaderComponent = ({ isDarkTheme, onThemeChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState({});
  const isLoggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const userData = useSelector((store) => store.authSlice.userData?._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const mobileMenuId = "primary-search-account-menu-mobile";

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (userData) {
          const { data } = await axios.get("/users/" + userData);
          const normalized = normalizeUserName(data);
          setName(normalized);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [userData]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleThemeChange = (event) => {
    onThemeChange(event.target.checked);
  };

  const handleOpenDrawerClick = () => {
    setIsOpen(true);
  }; //TODO: move
  const handleCloseDrawerClick = () => {
    setIsOpen(false);
  }; //TODO: Move

  const handleLogout = () => {
    //clear token from local/session storage
    clearToken();
    //update redux state
    dispatch(authActions.logout());
    //navigate to homepage
    navigate(ROUTES.HOME);
  };
  const handleEditProfile = () => {
    navigate(ROUTES.EDITPROFILE);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isLoggedIn && (
        <Box>
          <MenuItem onClick={handleEditProfile}>Edit profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Box>
      )}
      {!isLoggedIn && (
        <MenuItem
          onClick={() => {
            navigate(ROUTES.LOGIN);
          }}
        >
          Sign in
        </MenuItem>
      )}
    </Menu>
  );

  const renderMobileMenu = (
    <MobileMenu
      mobileMoreAnchorEl={mobileMoreAnchorEl}
      setMobileMoreAnchorEl={setMobileMoreAnchorEl}
    />
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleOpenDrawerClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            BIZ CARDS
          </Typography>
          <FilterComponent />
          <Box
            sx={{
              my: 2,
              p: 1,
            }}
          >
            <Typography sx={{ display: { xs: "none", md: "inline" } }}>
              {isDarkTheme ? "Dark" : "Light"} Mode
            </Typography>
            <Switch checked={isDarkTheme} onChange={handleThemeChange} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {isLoggedIn && (
            <Typography>
              Hello {name.name?.first} {name.name?.last}
            </Typography>
          )}

          <ProfileIconComponent handleProfileMenuOpen={handleProfileMenuOpen} />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <LeftDrawerComponent
        isOpen={isOpen}
        onCloseDrawer={handleCloseDrawerClick}
        isDarkTheme={isDarkTheme}
      />
    </Box>
  );
};
export default HeaderComponent;
