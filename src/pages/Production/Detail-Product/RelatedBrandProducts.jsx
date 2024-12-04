/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid2 } from "@mui/material";
import Slider from "react-slick";
import { WrapProductImg, WrapProductInforStyled } from "./DetailProduct.styled";
import ProductCard from "../../../components/common/product-card/ProductCard";
import { useGetProductsByBrandMutation } from "../../../service/product";
import { brandData } from "../admin-product/BrandData";

const ContainerRelatedBrandProducts = styled(Box)(() => ({
  width: "100%",
}));
const ContainerSlider = styled(Box)(() => ({
  width: "100%",
  border: "1px solid black",
  borderRadius: "20px",
  marginTop: "30px",
  "& .slider .product-card": {
    boxShadow: "unset",
  },
}));
const RelatedBrandProducts = ({ brand }) => {
  const [getProductsByBrand] = useGetProductsByBrandMutation();
  const [arrProduct, setArrProduct] = useState(null);
  const slidesToShowImg =
    arrProduct && arrProduct?.length > 4 ? 4 : Math.max(arrProduct?.length, 1);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowImg,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const brandSend = brandData.find((item) => item?.value == brand)?.value;
        getProductsByBrand({ brand: brandSend })
          .unwrap()
          .then((res) => {
            res && setArrProduct(res);
          });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [brand]);
  return (
    <ContainerRelatedBrandProducts>
      <Grid2 container spacing={2}>
        {/* {arrProduct &&
          arrProduct?.map((item) => (
            <Grid2 key={item?._id} size={4}>
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
           */}
        <Grid2 size={12}>
          <ContainerSlider>
            <Slider {...settings} className="slider">
              {arrProduct &&
                arrProduct?.map((item, index) => (
                  <ProductCard
                    className={"product-card"}
                    key={index}
                    productId={item?._id}
                    reducePrice={item?.reducePrice}
                    imgUrl={item?.image[0]}
                    productName={item?.name}
                    description={item?.description}
                    price={item?.price}
                    oldPrice={item?.oldPrice}
                  />
                ))}
            </Slider>
          </ContainerSlider>
        </Grid2>
      </Grid2>
    </ContainerRelatedBrandProducts>
  );
};

export default RelatedBrandProducts;
