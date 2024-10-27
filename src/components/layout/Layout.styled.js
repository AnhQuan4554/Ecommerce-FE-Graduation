import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const ContainerCustomStyled = styled(Container)(() => ({
  maxWidth: "unset",
  padding: "0 50px",
  background: "#ffff",
}));

export const HeaderStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const LogoStyled = styled("img")(() => ({
  maxHeight: "64px",
  maxWidth: "64px",
}));

export const WrapToolTipHeaderStyled = styled(Box)(() => ({
  marginLeft: " 40px",
  alignItems: "center",
}));

export const SearchStyled = styled(Box)(() => ({
  width: "300px",
  height: "50px",
  borderRadius: "30px",
  padding: "10px",
  border: "1px solid rgba(204, 204, 204, 1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& input": {
    flex: 1,
    height: "100%",
    border: "none",
    outline: "none",
    fonSize: "20px",
  },
}));

/// footer
export const WrapFooter = styled(Box)(() => ({
  width: "100%",
  marginTop: "50px",
  borderTopLeftRadius: "64px",
  borderTopRightRadius: "64px",
  backgroundColor: "rgb(14, 14, 14)",
  padding: "120px 64px 10px",
  color: "#fff",
}));

export const FooterLink = styled(Link)(() => ({
  color: "#fff",
  textDecoration: "none",
}));
