import React from "react";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductCard from "../common/product-card/ProductCard";
import phone01 from "../../assets/phone01.jpg";
import phone02 from "../../assets/phone02.jpg";
import phone03 from "../../assets/phone03.jpg";
import { useGetTopProductsQuery } from "../../service/product";

const ContainerBestSeller = styled(Box)(() => ({
  backgroundColor: "#ea4750",
  borderTopLeftRadius: "35px",
  borderTopRightRadius: "35px",
  paddingTop: "20px",
}));

const BestSeller = () => {
  const { currentData, isLoading } = useGetTopProductsQuery();
  return (
    <Box sx={{ padding: "0 50px" }}>
      <ContainerBestSeller>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            margin: "10px",
            marginLeft: "40px",
            fontWeight: 700,
          }}
        >
          Sản phẩm bán chạy nhất
        </Typography>
        <Grid2 container spacing={2} padding={"50px"}>
          {currentData &&
            currentData.map((item) => (
              <Grid2 key={item?._id} size={2.4}>
                <ProductCard
                  productId={item?._id}
                  reducePrice={item?.reducePrice}
                  imgUrl={item?.image[0]}
                  productName={item?.name}
                  description={item?.description}
                  price={item?.price}
                  oldPrice={item?.oldPrice}
                />
              </Grid2>
            ))}
        </Grid2>
      </ContainerBestSeller>
    </Box>
  );
};

export default BestSeller;
