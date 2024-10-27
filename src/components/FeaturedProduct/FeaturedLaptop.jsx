import React from "react";
import FeaturedHeader from "./FeaturedHeader";
import { ContainerFeatured } from "./FeaturedProductStyled";
import { Grid2 } from "@mui/material";
import ProductCard from "../common/product-card/ProductCard";
import { brandListLaptop, dataFakeLaptop, dataFakePhone } from "./dataFake";
const FeaturedLaptop = () => {
  return (
    <ContainerFeatured>
      <FeaturedHeader
        headerTitle={"LAPTOP NỔI BẬT NHẤT"}
        brandList={brandListLaptop}
      />
      <Grid2 container spacing={2}>
        {dataFakeLaptop.map((item) => (
          <Grid2 key={item.id} size={2.4}>
            <ProductCard
              reducePrice={item.reducePrice}
              imgUrl={item.imgUrl}
              productName={item.productName}
              description={item.description}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          </Grid2>
        ))}
      </Grid2>
    </ContainerFeatured>
  );
};

export default FeaturedLaptop;
