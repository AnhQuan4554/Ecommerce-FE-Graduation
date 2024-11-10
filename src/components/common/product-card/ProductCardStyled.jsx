import { Box, Button, Container, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

export const ContainerProductCardStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px",
  borderRadius: "30px",
  overflow: "hidden",
  boxShadow:
    "0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)",
  backgroundColor: "#fff",
  cursor: "pointer",
  height: "400px",
}));

export const ReducePrice = styled(Box)(() => ({
  position: "absolute",
  top: "0px",
  left: "0px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#d70018",
  padding: "4px 10px",
  fontSize: "20px",
  fontWeight: "500",
  boxShadow: "0 2px 6px #0000000f",
  color: "#fff",
}));

export const ProductNameStyled = styled(Typography)(() => ({
  fontWeight: "600",
  fontSize: "16px",
  minHeight: "60px",
  marginTop: "20px",
}));
export const DescriptionStyled = styled(Typography)(() => ({
  marginTop: "6px",
  marginBottom: "10px",
  fontSize: "16px",
  display: "-webkit-box",
  WebkitLineClamp: 2, // Giới hạn tối đa 2 dòng
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
export const WrapImg = styled(Box)(() => ({
  overflow: "hidden",
  position: "relative",
  maxHeight: "180px",
  display: "flex",
  justifyContent: "center",
}));

export const ImgProduct = styled("img")(() => ({
  width: "160px",
  height: "100%",
  objectFit: "cover",
}));

export const PropductPrice = styled(Typography)(({ oldPrice }) => ({
  color: !oldPrice ? "#d70018" : "#707070",
  fontWeight: !oldPrice && 700,
  fontSize: !oldPrice ? "16px" : "14px",
  textDecoration: oldPrice && "line-through",
  marginRight: "4px",
}));

export const FooterProductCard = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
}));

export const WrapStar = styled(Box)(() => ({
  display: "flex",

  alignItems: "center",
}));

export const WrapLike = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
