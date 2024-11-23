import { Box } from "@mui/material";

const ImgProductTable = ({ imgUrl }) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <img
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "contain" }}
        src={imgUrl}
      />
    </Box>
  );
};

export default ImgProductTable;
