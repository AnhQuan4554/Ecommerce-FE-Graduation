/* eslint-disable react/prop-types */
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerBtn = styled(Button)(
  ({ backgroundColor, color, borderColor }) => ({
    padding: "24px 40px",
    backgroundColor,
    color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "33px",
    border: "1px solid",
    borderColor,
  })
);

const ButtonCommon = ({ text, backgroundColor, color, borderColor }) => {
  return (
    <ContainerBtn
      backgroundColor={.hkbj}
      color={color}
      borderColor={borderColor}
    >
      {text}
    </ContainerBtn>
  );
};

export default ButtonCommon;
