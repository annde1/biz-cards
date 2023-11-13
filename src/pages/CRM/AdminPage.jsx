import { Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteUserModal from "../../components/DeleteUserModal";
const AdminPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
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
  const handleDeleteClick = () => {
    // try {
    //   const { data } = await axios.delete("/users/" + _id);
    //   console.log("User deleted", data);
    //   setAllUsers((usersCopy) => usersCopy.filter((user) => user._id !== _id));
    // } catch (err) {
    //   console.log("Delete user err from ADMIN", err);
    // }
    setShowModal(true);
  };

  const handleEditUserStatus = async (_id) => {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showModal && (
        <DeleteUserModal open={showModal} handleClose={handleClose} />
      )}
      <Box sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Typography variant="h4">User Managment System</Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Manage users from one place
        </Typography>
      </Box>

      {allUsers.map((user, index) => (
        <div key={user._id} style={{ width: "70vw" }}>
          <Accordion
            expanded={expanded === user._id}
            onChange={handleChange(user._id)}
            sx={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {user.name.first} {user.name.last}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {user.isBusiness ? "Business" : "Non Business"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleDeleteClick();
                  }}
                >
                  <DeleteIcon></DeleteIcon>
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                  User Details
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  alt={user.image.alt}
                  src={user.image.url}
                  sx={{ height: 80, width: 80, marginBottom: "3rem" }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ width: "32%", fontWeight: "bold" }}>
                  Email:{" "}
                </Typography>
                <Typography>{user.email}</Typography>
              </Box>
              <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ width: "32%", fontWeight: "bold" }}>
                  Phone:{" "}
                </Typography>
                <Typography>{user.phone}</Typography>
              </Box>
              <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ width: "32%", fontWeight: "bold" }}>
                  Address:{" "}
                </Typography>
                <Typography>
                  {user.address.street} {user.address.houseNumber},
                  {user.address.city} {user.address.zip}, {user.address.country}
                </Typography>
              </Box>
              <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ width: "32%", fontWeight: "bold" }}>
                  Status:{" "}
                </Typography>
                <Typography>
                  {user.isBusiness ? "Business User" : "Regular User"}
                </Typography>
              </Box>
              <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ width: "32%", fontWeight: "bold" }}>
                  Profile Created At:{" "}
                </Typography>
                <Typography>{user.createdAt}</Typography>
              </Box>
              <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </Box>
  );
};
export default AdminPage;
