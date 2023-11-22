import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { successToast } from "../service/toastifyService";

const ConfirmationModal = ({
  open,
  handleClose,
  children,
  userId,
  handleConfirm,
  actionType,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    height: "50%",
    boxShadow: 24,
    p: 4,
  };

  const handleConfirmClick = () => {
    handleConfirm(userId, actionType);
    handleClose();
    if (actionType === "delete") {
      successToast("User was deleted");
    } else if (actionType === "edit") {
      successToast("You updated business status of this user");
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            {children}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 4, textAlign: "center" }}
          >
            This action cannot be undone.
          </Typography>
          <Box
            sx={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="outlined" onClick={handleConfirmClick}>
              <CheckIcon sx={{ marginRight: "1rem" }} />
              Yes
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              <CloseIcon sx={{ marginRight: "1rem" }} />
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default ConfirmationModal;
