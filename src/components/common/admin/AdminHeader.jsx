/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import AddProductModel from "../../../pages/Production/admin-product/AddProductModel";
export const ContainerBtnAction = styled(Box)(() => ({
  display: "flex",
  gap: "50px",
  alignItems: "center",
}));

const AdminHeader = ({ title, buttonName, rowSelectionModel }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
        mb: "30px",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 500 }}>
        {title}
      </Typography>
      <Box>
        <ContainerBtnAction>
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#d7000e",
              width: "fit-content",
              color: "#fff",
              padding: "10px",
            }}
            onClick={handleOpen}
          >
            {buttonName}
          </Button>
          <Button
            disabled={rowSelectionModel?.length === 0}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#d7000e",
              width: "fit-content",
              padding: "10px",
              border: `1px solid black`,
              color: "#fff",
              "&:disabled": {
                opacity: 0.7,
              },
            }}
          >
            Xóa
          </Button>
        </ContainerBtnAction>
      </Box>
      <AddProductModel open={open} setOpen={setOpen} />
    </Box>
  );
};

export default AdminHeader;
