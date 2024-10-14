import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

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
