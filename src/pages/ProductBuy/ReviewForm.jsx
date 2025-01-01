/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
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
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const ReviewForm = ({ openReview, setOpenReview, productId }) => {
  const [starReview, setStarReview] = useState(4);
  const [comment, setComment] = useState("");
  const handleChangeStar = (e) => {
    setStarReview(e.target.value);
  };
  const handleCreateReview = () => {};
  const handleClose = () => setOpenReview(false);
  const TextFieldStyled = styled(Typography)(() => ({
    minWidth: "100px",
  }));
  return (
    <Modal open={openReview} onClose={handleClose}>
      <Box sx={style}>
        <FormControl variant="filled" fullWidth sx={{ gap: "20px" }}>
          <Typography variant="h4" mb={"20px"}>
            Tạo đánh giá cho sản phẩm
          </Typography>
          <Select
            sx={{
              backgroundColor: "#fff",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={starReview}
            onChange={handleChangeStar}
            defaultValue={4}
          >
            <MenuItem value={1}>
              <TextFieldStyled sx={{ minWidth: "100px" }}>Kém</TextFieldStyled>
              <StarIcon sx={{ color: "yellow" }} />
            </MenuItem>

            <MenuItem value={2}>
              <TextFieldStyled>Tạm được</TextFieldStyled>
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
            </MenuItem>
            <MenuItem value={3}>
              <TextFieldStyled>Trung bình</TextFieldStyled>
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
            </MenuItem>
            <MenuItem value={4}>
              <TextFieldStyled>Tốt</TextFieldStyled>
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
            </MenuItem>
            <MenuItem value={5}>
              <TextFieldStyled>Xuất xắc</TextFieldStyled>
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
              <StarIcon sx={{ color: "yellow" }} />
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{
            width: "100%",
            marginTop: "30px",
          }}
          onChange={
            (e) => setComment(e.target.value)
            // setNewProduct({ ...newProduct, countInStock: e.target.value })
          }
          required
          label="Bình luận về sản phẩm"
        />
        <Button
          variant="contained"
          sx={{ width: "90%", mt: "30px" }}
          onClick={handleCreateReview}
        >
          Tạo đánh giá
        </Button>
      </Box>
    </Modal>
  );
};

export default ReviewForm;
