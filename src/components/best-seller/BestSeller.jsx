import React from "react";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import lap2 from "../../assets/cate/lap2.jpg";
import lap3 from "../../assets/cate/lap3.jpg";
import ProductCard from "../common/product-card/ProductCard";
const BestSeller = () => {
  return (
    <Grid2 container>
      <Grid2 size={6}>
        <ProductCard
          categoryName="GEAR"
          imgUrl={lap3}
          productName={"Test 01"}
          description={"hello12222222222222"}
          price={"10000"}
        />
      </Grid2>
    </Grid2>
  );
};

export default BestSeller;
