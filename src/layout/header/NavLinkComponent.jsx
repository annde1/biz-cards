import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Typography
          color={isActive ? "#f9f8f7" : "#f9f8f7"}
          sx={{ p: 2 }}
          variant="h6"
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};

export default NavLinkComponent;
