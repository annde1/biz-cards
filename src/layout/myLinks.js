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

const cardsLinkRegular = [{ to: ROUTES.FAVORITE, children: "Favorites" }];

const profileLinks = (isLoggedIn, isAdmin) => {
  if (isAdmin) {
    return [
      { to: ROUTES.EDITPROFILE, children: "Edit Profile" },
      { to: ROUTES.MYPROFILE, children: "Your Profile" },
      { to: ROUTES.CRM, children: "CRM" },
    ];
  } else if (isLoggedIn) {
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

export default myLinks;
export { alwaysLinks, profileLinks, cardsLinkBusiness, cardsLinkRegular };
