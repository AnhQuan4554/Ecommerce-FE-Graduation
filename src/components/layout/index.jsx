/* eslint-disable react/prop-types */
import React from "react";
import { ContainerCustomStyled } from "./Layout.styled";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
