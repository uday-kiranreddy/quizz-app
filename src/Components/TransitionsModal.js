import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGlobalContext } from "../Context/Context";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const { retry ,correctAnswersCount} = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center">
      <Button
        variant="contained"
        style={{
          marginTop: "10%",
          background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
        }}
        onClick={handleOpen}
      >
        Check Results
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Result
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              You Have Answered {correctAnswersCount} Questions Correctly
              <DoneAllIcon />
            </Typography>
            <Button
              onClick={retry}
              variant="contained"
              style={{
                fontWeight: "bold",
                backgroundColor: "green",
                color: "white",
                padding: "5px",
              }}
            >
              Try again
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}