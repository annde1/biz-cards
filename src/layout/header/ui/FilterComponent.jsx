import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import Box from "@mui/material/Box";
const FilterComponent = () => {
  const [txt, setTxt] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setTxt(e.target.value);
    navigate(`${ROUTES.HOME}?filter=${e.target.value}`);
  };

  return (
    <Box sx={{ width: "30rem" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={txt}
          onChange={handleInputChange}
        />
      </Search>
    </Box>
  );
};

export default FilterComponent;
