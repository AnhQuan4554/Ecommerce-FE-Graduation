import React from "react";
import FeaturedHeader from "./FeaturedHeader";
import { ContainerFeatured } from "./FeaturedProductStyled";
import { Grid2 } from "@mui/material";
import ProductCard from "../common/product-card/ProductCard";
import { brandListPhone, dataFakePhone } from "./dataFake";
const FeaturedPhone = () => {
  return (
    <ContainerFeatured>
      <FeaturedHeader
        headerTitle={"ĐIỆN THOẠI NỔI BẬT NHẤT"}
        brandList={brandListPhone}
      />
      <Grid2 container spacing={2}>
        {dataFakePhone.map((item) => (
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

export default FeaturedPhone;
