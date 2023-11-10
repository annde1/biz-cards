import { Box } from "@mui/material";
import nextKey from "generate-my-key";
import {
  loggedInLinks,
  loggedOutLinks,
  businessLinks,
  adminLinks,
} from "../../myLinks";
import NavLinkComponent from "../NavLinkComponent";
import { useSelector } from "react-redux";

const Links = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const isBusiness = useSelector(
    (store) => store.authSlice.userData?.isBusiness
  );
  const isAdmin = useSelector((store) => store.authSlice.userData?.isAdmin);
  const userData = useSelector((store) => store.authSlice.userData);
  console.log(isBusiness);
  console.log(userData);
  console.log(isAdmin);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {loggedIn &&
        isBusiness &&
        businessLinks.map((item) => (
          <NavLinkComponent to={item.to} key={nextKey()}>
            {item.children}
          </NavLinkComponent>
        ))}
      {isAdmin &&
        adminLinks.map((item) => (
          <NavLinkComponent to={item.to} key={nextKey()}>
            {item.children}
          </NavLinkComponent>
        ))}
    </Box>
  );
};

export default Links;
