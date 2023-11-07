import ROUTES from "../routes/ROUTES";

const myLinks = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.REGISTER, children: "Register page" },
  { to: ROUTES.LOGIN, children: "Login page" },
  { to: ROUTES.ABOUT, children: "About" },
];

// const alwaysLinks = [{ to: ROUTES.HOME, children: "Home page" }];
const loggedInLinks = [
  { to: "/profile", children: "Profile page" },
  { to: ROUTES.FAVORITE, children: "Favorite Cards" },
];
const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.ABOUT, children: "About" },
  { to: ROUTES.HOME, children: "Home" },
];

const businessLinks = [
  { to: ROUTES.CREATECARD, children: "Create Card" },
  { to: ROUTES.HOME, children: "Home" },
];
//TODO: Bring back the always link, cause there is bug
//TODO: Left drawer component (make it as navigation center) - make links. Make two sections for profile related stuff and card related stuff. Ask Yonatan if ok, if NavBar link of be there (instead the Hamburger manu)
export default myLinks;
export { loggedInLinks, loggedOutLinks, businessLinks };
