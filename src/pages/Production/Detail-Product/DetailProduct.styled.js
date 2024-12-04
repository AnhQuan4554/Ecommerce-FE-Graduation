import { Box, Container, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const ContainerCustomStyled = styled(Container)(() => ({
  maxWidth: "unset",
  padding: "0 50px",
  background: "#ffff",
}));
export const ProductNameStyled = styled(Typography)(() => ({
  fontSize: "24px",
  fontWeight: 700,
  color: "#0a263c",
}));

export const WrapProductInforStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  borderRadius: "15px",
  padding: "20px",

  "& button": {
    color: "red",
    background: "inherit",
  },

  "& .slick-prev:before": {
    color: "red",
  },

  "& .slick-next:before": {
    color: "red",
  },
}));

export const WrapProductImg = styled(Box)(() => ({
  display: "flex !important",
  alignItems: "center",
  justifyContent: "center",
}));
export const ProductImg = styled("img")(() => ({
  objectFit: "cover",
  width: "auto",
  // height: "350px",
}));

export const WrapInforSpecificationStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const PriceList = styled(Grid2)(() => ({}));
export const PriceItem = styled(Grid2)(({ isHighlighted }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  borderRadius: "10px",
  padding: "4px 5px",
  width: "100%",
  cursor: "pointer",
  marginBottom: "20px",
  backgroundColor: isHighlighted ? "rgba(255, 192, 203, 0.5)" : "",
  borderColor: isHighlighted ? "red" : "",
}));
export const WrapPromotion = styled(Grid2)(() => ({
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  border: "1px solid #fee2e2",
}));

export const PromotionHeaderStyled = styled(Box)(() => ({
  display: "flex",
  padding: "4px 8px",
  backgroundColor: "#fee2e2",
  alignItems: "flex-end",
  color: "#d70018",
  height: "42px",
}));

export const WrapPromotionContent = styled(Box)(() => ({
  background: "#fff",
  width: "100%",
  padding: "10px",
}));

export const NumberOrder = styled(Box)(() => ({
  height: "30px",
  width: "30px",
  borderRadius: "50%",
  background: "#cc0f35",
  color: "#ffF",
  fontSize: "20px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px",
}));
export const TypographyContentPromo = styled(Typography)(() => ({
  flex: "1",
}));

export const AdditionalProductImages = styled(Grid2)(() => ({
  width: "100%",
  display: "flex",
}));
export const AdditionalProductImagesItem = styled("img")(() => ({
  width: "100%",
  maxWidth: "150px",
  height: "auto",
  objectFit: "cover",
  borderRadius: "6px",
  border: "1px solid black",
}));
