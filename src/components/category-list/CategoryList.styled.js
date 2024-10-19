import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WrapCategoryItemStyled = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  padding: "64px",
  width: "100%",
  height: "330px",
  borderRadius: "33px",
  backgroundColor: "#f8f8f8",
}));

export const ContainerContentStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: "80px",
}));

export const NameCategoryStyled = styled(Typography)(() => ({
  color: "black",
  marginBottom: "8px",
}));

export const ImgCateforyItemStyled = styled("img")(
  ({ widthImg, heighImg, rightImg, topImg }) => ({
    position: "absolute",
    top: topImg,
    right: rightImg,
    color: "black",
    marginBottom: "8px",
    width: widthImg,
    height: heighImg,
  })
);
