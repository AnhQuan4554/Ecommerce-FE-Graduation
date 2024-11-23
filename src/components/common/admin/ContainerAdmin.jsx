import { Box } from "@mui/material";

const ContainerAdmin = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100",
        padding: "20px 50px",
        position: "relative",
        minHeight: "54vh",
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerAdmin;
