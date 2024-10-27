import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerFeatured = styled(Box)(() => ({
  padding: "0 50px",
  marginTop: "30px",
}));

export const ContainerFeaturedHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
}));

export const HeaderTitle = styled(Typography)(() => ({
  color: "#444",
  fontWeight: 600,
  marginRight: "50px",
}));
export const BrandList = styled(Box)(() => ({
  backgroundColor: "#f3f4f6",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  color: "#444",
  // float: right,
  fontSize: "13px",
  height: "34px",
  padding: "5px 10px",
  whiteSpace: "nowrap",
  marginRight: "10px",
  cursor: "pointer",
}));
