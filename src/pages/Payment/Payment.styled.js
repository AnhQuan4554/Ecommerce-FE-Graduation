import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerPaymentPageStyled = styled(Grid2)(() => ({
  padding: "50px 50px",
}));
export const DriverInforStyled = styled(Box)(() => ({}));
export const ItemInforStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "80%",
  marginBottom: "10px",
}));
export const TextFiledStyled = styled(TextField)(() => ({
  width: "100%",
  fontSize: "30px",
}));
