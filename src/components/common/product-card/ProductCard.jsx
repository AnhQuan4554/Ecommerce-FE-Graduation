/* eslint-disable react/prop-types */
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import lap2 from "../../../assets/cate/lap2.jpg";
// import lap2 from "../../../";

const ContainerProductCardStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const CategoryName = styled(Box)(() => ({
  position: "absolute",
  top: "20px",
  left: "20px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "15px",
  fontSize: "20px",
  fontWeight: "500",
  boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
}));

const WrapImg = styled(Box)(() => ({
  backgroundColor: "#f6f6f6",
  overflow: "hidden",
  borderRadius: "33px",
  position: "relative",
}));

const ImgProduct = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const ProductCard = ({
  categoryName = "",
  imgUrl = "",
  productName,
  description,
  price,
}) => {
  return (
    <ContainerProductCardStyled>
      <WrapImg>
        <CategoryName>{categoryName}</CategoryName>
        <ImgProduct src={imgUrl} />
      </WrapImg>
      <Typography variant="h4">{productName}</Typography>
      <Typography>{description}</Typography>
      <Typography>{price}</Typography>
    </ContainerProductCardStyled>
  );
};

export default ProductCard;
