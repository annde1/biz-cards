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
      return <LoginIcon />;
    case ROUTES.REGISTER:
      return <AppRegistrationIcon />;
    case ROUTES.FAVORITE:
      return <FavoriteIcon />;
    case ROUTES.MYCARDS:
      return <BusinessCenterIcon />;
    case ROUTES.ABOUT:
      return <InfoIcon />;
    case ROUTES.EDITPROFILE:
      return <ManageAccountsIcon />;
    case ROUTES.CREATECARD:
      return <AddIcon />;
    case ROUTES.HOME:
      return <HomeIcon />;
    case ROUTES.MYPROFILE:
      return <Person2Icon />;
    case ROUTES.CRM:
      return <PeopleAltIcon />;

    default:
      return null;
  }
};
export default getIcon;
