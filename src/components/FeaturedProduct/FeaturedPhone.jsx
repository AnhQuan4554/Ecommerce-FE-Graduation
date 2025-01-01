import React from "react";
import FeaturedHeader from "./FeaturedHeader";
import { ContainerFeatured } from "./FeaturedProductStyled";
import { Grid2 } from "@mui/material";
import ProductCard from "../common/product-card/ProductCard";
import { brandListPhone } from "./dataFake";
import { useGetTopProductsQuery } from "../../service/product";
const FeaturedPhone = () => {
  const { currentData: topPhoneData, isLoading } = useGetTopProductsQuery({
    typeProduct: 0,
    limitProduct: 10,
  });
  return (
    <ContainerFeatured>
      <FeaturedHeader
        headerTitle={"ĐIỆN THOẠI NỔI BẬT NHẤT"}
        brandList={brandListPhone}
      />
      <Grid2 container spacing={2}>
        {topPhoneData &&
          topPhoneData.map((item) => (
            <Grid2 key={item.id} size={2.4}>
              <ProductCard
                productId={item?._id}
                reducePrice={item.reducePrice}
                imgUrl={item.image[0]}
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
