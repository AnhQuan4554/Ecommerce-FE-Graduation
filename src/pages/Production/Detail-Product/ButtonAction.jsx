import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Container, Grid, Grid2, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  AdditionalProductImages,
  AdditionalProductImagesItem,
} from "./DetailProduct.styled";
import imgDetail01 from "../../../assets/detail/imgDetail01.jpg";
import imgDetail02 from "../../../assets/detail/imgDetail02.jpg";
import imgDetail03 from "../../../assets/detail/imgDetail03.jpg";
import imgDetail04 from "../../../assets/detail/imgDetail04.jpg";

const arrImg = [imgDetail01, imgDetail02, imgDetail03, imgDetail04];

const WrapBtnAction = styled(Box)(() => ({
  marginTop: "20px",
}));
const BuyNowBtnStyled = styled(Button)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "linear-gradient(#f52f32, #e11b1e)",
  color: "#fff",
  height: "60px",
  borderRadius: "10px",
  width: "100%",
}));
const OrderBtnStyled = styled(Button)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "2px solid #e04040",
  borderRadius: "10px",
  height: "60px",
  width: "60px",
}));

const ButtonAction = ({ setOpenModal }) => {
  return (
    <WrapBtnAction>
      <Grid2 container spacing={2}>
        <Grid2 size={10}>
          <BuyNowBtnStyled
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "500" }}>
              Mua ngay
            </Typography>
            <Typography>(Giao nhanh từ 2 giờ)</Typography>
          </BuyNowBtnStyled>
        </Grid2>
        <Grid2 size={2}>
          <OrderBtnStyled
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <AddShoppingCartIcon
              sx={{ fontSize: "30px", color: "#e04040", mb: "2px" }}
            />
            <Typography sx={{ fontSize: "8px", color: "#e04040" }}>
              Thêm vào giỏ hàng
            </Typography>
          </OrderBtnStyled>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2} mt={"20px"}>
        <Grid2 size={6}>
          <Button
            sx={{
              borderRadius: "10px",
              width: "100%",
              height: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(180deg, #3a78d0, #277cea)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "700", fontSize: "14px", color: "#fff" }}
            >
              TRẢ GÓP 0%
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "#fff" }}>
              Trả trước chỉ tử 0 đ
            </Typography>
          </Button>
        </Grid2>
        <Grid2 size={6}>
          <Button
            sx={{
              borderRadius: "10px",
              width: "100%",
              height: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "linear-gradient(180deg, #3a78d0, #277cea)",
              background: "linear-gradient(180deg, #3a78d0, #277cea)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "700", fontSize: "14px", color: "#fff" }}
            >
              TRẢ GÓP 0% QUA THẺ
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "#fff" }}>
              (Không phí chuyển đổi 3 - 6 tháng)
            </Typography>
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container mt={"20px"}>
        <Grid2 size={12}>
          <Button
            sx={{
              borderRadius: "10px",
              width: "100%",
              height: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ec8104",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "700", fontSize: "14px", color: "#fff" }}
            >
              Thu cũ lên đời
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "#fff" }}>
              Chỉ từ 24.000.000 đ
            </Typography>
          </Button>
        </Grid2>
      </Grid2>
    </WrapBtnAction>
  );
};

export default ButtonAction;
