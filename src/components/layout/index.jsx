/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { ContainerCustomStyled } from "./Layout.styled";
import Header from "./Header";
import { Box } from "@mui/material";
import Footer from "./Footer";
import ScrollToTop from "../../ScrollToTop";

const Layout = ({ children }) => {
  return (
    <Box>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
