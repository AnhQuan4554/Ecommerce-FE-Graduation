/* eslint-disable react/prop-types */
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ContainerProductCardStyled,
  DescriptionStyled,
  FooterProductCard,
  ImgProduct,
  ProductNameStyled,
  PropductPrice,
  ReducePrice,
  WrapImg,
  WrapLike,
  WrapStar,
} from "./ProductCardStyled";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = ({
  reducePrice,
  imgUrl = "",
  productName,
  description,
  price,
  oldPrice,
  productId,
  className,
}) => {
  const arrayStar = new Array(5).fill(1);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    const isInProductDetail = location.pathname.includes("/product-detail");
    if (isInProductDetail) {
      // Chỉ lấy phần trước `product-detail`
      const newPath = location.pathname.split("/product-detail")[0];
      navigate(`${newPath}/product-detail/${productId}`, { replace: true });
    } else {
      navigate(`product-detail/${productId}`, { replace: true });
    }
  };
  return (
    <ContainerProductCardStyled
      className={className ? className : ""}
      onClick={handleNavigate}
    >
      <WrapImg>
        {reducePrice > 0 && <ReducePrice>{reducePrice}%</ReducePrice>}
        <ImgProduct src={imgUrl} />
      </WrapImg>
      <ProductNameStyled variant="h3">{productName}</ProductNameStyled>
      <Box sx={{ display: "flex" }}>
        <PropductPrice>{price} đ</PropductPrice>
        {oldPrice && <PropductPrice oldPrice={true}>{price} đ</PropductPrice>}
      </Box>
      <DescriptionStyled>{description}</DescriptionStyled>
      <FooterProductCard>
        <WrapStar className="okok">
          {arrayStar.map((item, index) => (
            <StarRateIcon
              key={index}
              sx={{ width: "15px", height: "15px", color: "#f59e0b" }}
            />
          ))}
        </WrapStar>
        <WrapLike>
          <Typography variant="h6" sx={{ fontSize: "12px", color: "#777" }}>
            Yêu thích
          </Typography>
          <FavoriteIcon
            sx={{
              width: "20px",
              height: "30px",
              marginLeft: "4px",
              cursor: "pointer",
              "&:hover": {
                color: "red",
              },
            }}
          />
        </WrapLike>
      </FooterProductCard>
    </ContainerProductCardStyled>
  );
};

export default ProductCard;
