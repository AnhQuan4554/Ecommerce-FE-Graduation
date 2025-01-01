import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
const WrapCard = styled(Box)(() => ({
  padding: "20px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "#f98181",
}));
const ContainerIcon = styled(Box)(() => ({
  maxWidth: "50px",
  maxHeight: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const TypographyTitle = styled(Typography)(() => ({
  fontWeight: "600 !important",
  fontSize: "24px !important",
  color: "#fff",
}));
const TypographyValueText = styled(Typography)(() => ({
  fontSize: "20px !important",
  color: "#fff",
}));

const CardCustom = ({ icon, title, valueText }) => {
  return (
    <WrapCard>
      <ContainerIcon>{icon}</ContainerIcon>
      <TypographyTitle>{title}</TypographyTitle>
      <TypographyValueText>{valueText}</TypographyValueText>
    </WrapCard>
  );
};

export default CardCustom;
