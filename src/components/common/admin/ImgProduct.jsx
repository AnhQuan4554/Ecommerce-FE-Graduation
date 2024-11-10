import { Box } from "@mui/material";

const ImgProductTable = ({ imgUrl }) => {
  console.log("imgUrl table___", imgUrl);
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
