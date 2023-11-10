import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { normalizeDataProfilePage } from "./myProfileNormalization";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const MyProfilePage = () => {
  const [profileData, setProfileData] = useState({});
  const userData = useSelector((store) => store.authSlice.userData);
  console.log(userData);
  console.log(profileData);
  useEffect(() => {
    const getUserData = async () => {
      try {
        if (userData) {
          const { data } = await axios.get("/users/" + userData._id);
          console.log(data);
          const nomralize = normalizeDataProfilePage(data);
          setProfileData(nomralize);
          //   console.log(profileData); //Not avaible immediately
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [userData]);
  return (
    <Box>
      <Typography>
        {profileData.first} {profileData.last}
      </Typography>
      <Avatar
        alt="Remy Sharp"
        src={profileData.url ? profileData.url : ""}
        style={{ height: "6rem", width: "6rem" }}
      />
    </Box>
  );
};
export default MyProfilePage;
