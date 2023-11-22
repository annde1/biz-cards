import ROUTES from "../routes/ROUTES";

const myLinks = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.REGISTER, children: "Register page" },
  { to: ROUTES.LOGIN, children: "Login page" },
  { to: ROUTES.ABOUT, children: "About" },
];

const alwaysLinks = [
  { to: ROUTES.ABOUT, children: "About" },
  { to: ROUTES.HOME, children: "Home" },
];

const cardsLinkBusiness = [
  { to: ROUTES.MYCARDS, children: "My Cards" },
  { to: ROUTES.CREATECARD, children: "Create Card" },
  { to: ROUTES.FAVORITE, children: "Favorites" },
];

const profileLinks = (isLoggedIn) => {
  if (isLoggedIn) {
    return [
      { to: ROUTES.EDITPROFILE, children: "Edit Profile" },
      { to: ROUTES.MYPROFILE, children: "Your Profile" },
    ];
  } else {
    return [
      { to: ROUTES.LOGIN, children: "Log in" },
      { to: ROUTES.REGISTER, children: "Register" },
    ];
  }
};
//TODO: Bring back the always link, cause there is bug
//TODO: Left drawer component (make it as navigation center) - make links. Make two sections for profile related stuff and card related stuff. Ask Yonatan if ok, if NavBar link of be there (instead the Hamburger manu)
export default myLinks;
export { alwaysLinks, profileLinks, cardsLinkBusiness };
//profileLinks, cardsLinkBusiness, alwaysLink;
