import { Box } from "@mui/material";
import React from "react";

const ContainerAdmin = ({ children }) => {
  return (
    <Box sx={{ width: "100", padding: "20px 50px", position: "relative" }}>
      {children}
    </Box>
  );
};

export default ContainerAdmin;
