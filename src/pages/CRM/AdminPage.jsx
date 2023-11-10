import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const { data } = await axios.get("/users");
        console.log(data);
        setAllUsers(data);
      } catch (err) {
        console.log("Error CRM", err);
      }
    };
    getAllUsers();
  }, []);
  return (
    <>
      <Typography variant="h3">CRM</Typography>
      <Typography variant="body1">Manage users from one place</Typography>
    </>
  );
};
export default AdminPage;
