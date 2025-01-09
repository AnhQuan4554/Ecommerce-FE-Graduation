/* eslint-disable react/prop-types */
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import StarRateIcon from "@mui/icons-material/StarRate";
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
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../../../redux/favoriteSlice";

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
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite?.favorite);

  const handleNavigate = () => {
    const baseUrl = `/product-detail/${productId}`;
    navigate(baseUrl, { replace: true });
  };
  const isFavorite = favorite?.some((item) => item === productId);

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
        {oldPrice && Number(oldPrice) > 0 && (
          <PropductPrice oldPrice={true}>{oldPrice} đ</PropductPrice>
        )}
      </Box>
      <DescriptionStyled>{description}</DescriptionStyled>
      <FooterProductCard>
        <WrapStar>
          {arrayStar?.map((item, index) => (
            <StarRateIcon
              key={index}
              sx={{ width: "15px", height: "15px", color: "#f59e0b" }}
            />
          ))}
        </WrapStar>
        <WrapLike>
          <Typography
            variant="h6"
            sx={{
              fontSize: "12px",
            }}
          >
            Yêu thích
          </Typography>
          <FavoriteIcon
            sx={{
              color: isFavorite ? "red" : "",
              // color: "red",
              width: "20px",
              height: "30px",
              marginLeft: "4px",
              cursor: "pointer",
              "&:hover": {
                color: "red",
              },
            }}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(addToFavorite(productId));
            }}
          />
        </WrapLike>
      </FooterProductCard>
    </ContainerProductCardStyled>
  );
};

export default ProductCard;
