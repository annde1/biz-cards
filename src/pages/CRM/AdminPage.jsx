import { Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { normalizeData } from "./normalizeName";
import ConfirmationModal from "../../components/ConfirmationModal";
import CircularProgress from "@mui/material/CircularProgress";

import "../../App.css";
const AdminPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [actionType, setActiontype] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const { data } = await axios.get("/users");
        const normalized = normalizeData(data);
        setAllUsers(normalized);
        setIsLoading(false);
      } catch (err) {
        console.log("Error CRM", err);
      }
    };
    getAllUsers();
  }, []);

  //Action of deleting and editing user is possible only on non admin users
  const handleUserAction = async (userId, actionType) => {
    try {
      if (actionType === "delete") {
        const { data } = await axios.delete("/users/" + userId);
        console.log("USER DELETED", data);
        setAllUsers((usersCopy) =>
          usersCopy.filter((user) => user._id !== userId)
        );
      } else if (actionType === "edit") {
        await axios.patch("/users/" + userId);
        console.log("USER UPDATED SUCCESFULLY");
        //Fetch all users again so list of users will be up to date
        const { data } = await axios.get("/users");
        setAllUsers(data);
        console.log("USER LIST UPDATED ", data);
      }
      //reset the state of selected user and action type
      setSelectedUserId(null);
      setActiontype(null);
    } catch (err) {
      console.log("ERROR PERFORMING USER ACTION", err);
    }
  };

  const handleOpenModal = (userId, actionType) => {
    setShowConfirmationModal(true);
    setActiontype(actionType);
    setSelectedUserId(userId);
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
    setActiontype(null);
    setSelectedUserId(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showConfirmationModal && (
        <ConfirmationModal
          open={showConfirmationModal}
          handleClose={handleCloseModal}
          userId={selectedUserId}
          actionType={actionType}
          handleConfirm={handleUserAction}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {actionType === "delete"
              ? "Are you sure you want to delete this user?"
              : "Are you sure you want to edit the business status of this user?"}
          </Typography>
        </ConfirmationModal>
      )}
      <Box sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Typography variant="h4">User Managment System</Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Manage users from one place
        </Typography>
        {isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
      {/*TODO: extract this (below) into a component */}
      {allUsers.map((user) => (
        <div key={user._id} style={{ width: "70vw" }}>
          <Accordion
            expanded={expanded === user._id}
            onChange={handleChange(user._id)}
            sx={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              marginBottom: "1rem",
            }}
            className={expanded === user._id ? "accordionBorder" : ""}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ border: "none" }}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {user.name.first} {user.name.last}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {user.isBusiness ? "Business" : "Non Business"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {!user.isAdmin && (
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    onClick={() => {
                      handleOpenModal(user._id, "edit");
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleOpenModal(user._id, "delete");
                    }}
                  >
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </Box>
              )}

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
