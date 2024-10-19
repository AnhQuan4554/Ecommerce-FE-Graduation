import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerBanner = styled(Box)(() => ({
  padding: "0 50px",
  background: "#ffff",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
}));

export const ImgBannerStyled = styled("img")(
  ({ top, left, right, width, height }) => ({
    position: "absolute",
    top,
    left: left,
    right,
    objectFit: "cover",
    width: width || "250px",
    height,
  })
);

export const TitleBannerStyled = styled(Typography)(() => ({
  color: "black",
  maxWidth: "629px",
  textAlign: "center",
}));

export const DesBannerStyled = styled(Typography)(() => ({
  color: "#5b5b5b",
  maxWidth: "629px",
  fontSize: "18px",
  textAlign: "center",
  marginTop: "8px",
}));

export const ContaiBtnStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
}));

export const ButtonBannerStyled = styled(Button)(
  ({ backgroundColor, color, borderColor }) => ({
    backgroundColor,
    color,
    borderRadius: "33px",
    padding: "24px 40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderColor,
    height: "68px",
    margin: "0 20px",
  })
);
