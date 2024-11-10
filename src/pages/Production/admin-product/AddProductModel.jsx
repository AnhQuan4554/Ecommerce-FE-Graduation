/* eslint-disable react/prop-types */
import { Box, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
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
};

const TextFieldStyled = styled(TextField)(() => ({
  width: "90%",
  fontSize: "20px",
}));

const AddProductModel = ({ open, setOpen }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
  });
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4" mb={"30px"}>
          Thêm sản phẩm mới
        </Typography>
        <TextFieldStyled
          // onChange={(e) => setEmail(e.target.value)}
          required
          label="Nhập tên sản phẩm"
        />
      </Box>
    </Modal>
  );
};

export default AddProductModel;
