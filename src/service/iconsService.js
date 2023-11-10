import ROUTES from "../routes/ROUTES";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InfoIcon from "@mui/icons-material/Info";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
const getIcon = (to) => {
  switch (to) {
    case ROUTES.LOGIN:
      return <LoginIcon />; // Use the HomeIcon for the HOME route
    case ROUTES.REGISTER:
      return <AppRegistrationIcon />;
    case ROUTES.FAVORITE:
      return <FavoriteIcon />;
    case ROUTES.MYCARDS:
      return <BusinessCenterIcon />;
    case ROUTES.ABOUT:
      return <InfoIcon />;
    case ROUTES.EDITPROFILE:
      return <EditNoteIcon />;
    case ROUTES.CREATECARD:
      return <AddIcon />;
    case ROUTES.HOME:
      return <HomeIcon />;

    default:
      return null; // For routes with no specific icon
  }
};
export default getIcon;
