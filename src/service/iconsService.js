import ROUTES from "../routes/ROUTES";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
const getIcon = (to) => {
  switch (to) {
    case ROUTES.LOGIN:
      return <LoginIcon sx={{ marginLeft: "6.5rem", marginBottom: "1rem" }} />;
    case ROUTES.REGISTER:
      return (
        <AppRegistrationIcon
          sx={{ marginLeft: "5.5rem", marginBottom: "1rem" }}
        />
      );
    case ROUTES.FAVORITE:
      return <FavoriteIcon sx={{ marginLeft: "5rem", marginBottom: "1rem" }} />;
    case ROUTES.MYCARDS:
      return (
        <BusinessCenterIcon sx={{ marginLeft: "5rem", marginBottom: "1rem" }} />
      );
    case ROUTES.ABOUT:
      return <InfoIcon sx={{ marginLeft: "6.5rem", marginBottom: "1rem" }} />;
    case ROUTES.EDITPROFILE:
      return (
        <ManageAccountsIcon
          sx={{ marginLeft: "4.5rem", marginBottom: "1rem" }}
        />
      );
    case ROUTES.CREATECARD:
      return <AddIcon sx={{ marginLeft: "4rem", marginBottom: "1rem" }} />;
    case ROUTES.HOME:
      return <HomeIcon sx={{ marginLeft: "6.5rem", marginBottom: "1rem" }} />;
    case ROUTES.MYPROFILE:
      return <Person2Icon sx={{ marginLeft: "4rem", marginBottom: "1rem" }} />;
    case ROUTES.CRM:
      return (
        <PeopleAltIcon sx={{ marginLeft: "7.2rem", marginBottom: "1rem" }} />
      );

    default:
      return null;
  }
};
export default getIcon;
