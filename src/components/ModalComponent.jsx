import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";
import MapComponent from "./MapComponent";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f9f8f7",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const ModalComponent = ({
  open,
  handleClose,
  address,
  description,
  title,
  web,
  street,
  houseNumber,
  city,
  email,
}) => {
  const [coords, setCoords] = useState({});
  const [isMapLoading, setIsMapLoading] = useState(true);
  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const response = await fetch(
          `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(
            address
          )}&apiKey=vkO4zw12R9oMrqqrQIGprb2uwuKIUSt6V8bViZmTXNM`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          const { lat, lng } = data.items[0].access[0];
          setCoords({ lat, lng });
        }
      } catch (err) {
        console.log(err);
        setCoords({});
      } finally {
        setIsMapLoading(false);
      }
    };
    fetchCoords();
  }, [address]);

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
          {isMapLoading ? (
            <Typography>Loading map...</Typography>
          ) : Object.keys(coords).length > 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Map:</Typography>
              <MapComponent coords={coords} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Map:</Typography>
              <Typography>Map is unavailable for this location.</Typography>
            </Box>
          )}

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
