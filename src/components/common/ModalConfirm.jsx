/* eslint-disable react/prop-types */
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  height: "20vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const ModalConfirm = ({ message, actionConfirm, setOpen, open }) => {
  const handleClickConfirmButton = async () => {
    actionConfirm && (await actionConfirm());
    handleClose();
  };
  const handleClose = () => setOpen(false);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h4"> {message}</Typography>
        <Button
          variant="contained"
          sx={{ mt: "30px" }}
          onClick={handleClickConfirmButton}
        >
          Xác nhận
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalConfirm;
