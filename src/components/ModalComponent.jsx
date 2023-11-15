import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Description } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f9f8f7",
  // border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const ModalComponent = ({
  open,
  handleClose,
  address,
  description,
  image,
  title,
  subtitle,
  web,
  street,
  houseNumber,
  city,
  country,
  email,
}) => {
  console.log(address);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Details
          </Typography>
          <Divider
            sx={{
              marginTop: "1rem",
              marginBottom: "0.6rem",
            }}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "0.6rem",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Titlte:</Typography>
            <Typography>{title}</Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "0.6rem",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Description:</Typography>
            <Typography>{description}</Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Address:</Typography>
            <Typography>
              {street}, {houseNumber},{city}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "0.6rem",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Web:</Typography>
            {web ? (
              <Link href={web}>{web}</Link>
            ) : (
              <Typography>
                {"This business didn't specify web address"}
              </Typography>
            )}
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "0.6rem",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
            {email ? (
              <Typography>{email}</Typography>
            ) : (
              <Typography>
                {"This business didn't specify web address"}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalComponent;
