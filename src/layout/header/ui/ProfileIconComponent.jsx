import { Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
const ProfileIconComponent = ({ handleProfileMenuOpen }) => {
  const menuId = "primary-search-account-menu";
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Box>
  );
};
export default ProfileIconComponent;
