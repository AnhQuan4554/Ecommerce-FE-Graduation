import { Box, CircularProgress, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../../components/common/product-card/ProductCard";
import { useFilterProductsMutation } from "../../service/product";
import { useSelector } from "react-redux";

const FavoriteProducts = () => {
  const ProductList = styled(Grid2)(() => ({
    minHeight: "400px",
  }));
  const [condition, setCondition] = useState({
    name: "",
    category: "",
    brand: "",
    priceStart: 0,
    priceEnd: 0,
    // 0 all product , 1 Phone , 2 Laptop
    typeProduct: 0,
  });
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const favorite = useSelector((state) => state.favorite?.favorite);
  const [filterProducts, { isLoading, data: listProduct }] =
    useFilterProductsMutation();
  useEffect(() => {
    const handleSearch = async () => {
      await filterProducts(condition);
    };
    handleSearch();
  }, []);
  useEffect(() => {
    if (listProduct && listProduct?.length > 0) {
      const filteredFavorites = listProduct.filter((product) =>
        favorite.includes(product._id)
      );

      setFavoriteProducts(filteredFavorites);
    }
  }, [listProduct, favorite]);

  return (
    <Box sx={{ padding: "20px 50px", minHeight: "600px" }}>
      <Typography variant="h4">Danh sách các sản phẩm yêu thích</Typography>
      {isLoading ? (
        <CircularProgress size="60px" />
      ) : (
        <ProductList container spacing={2}>
          {favoriteProducts &&
            favoriteProducts?.map((item) => (
              <Grid2 key={item.id} size={2.4}>
                <ProductCard
                  productId={item?._id}
                  reducePrice={item.reducePrice}
                  imgUrl={item.image[0]}
                  productName={item.productName}
                  description={item.description}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  rating={item?.rating}
                />
              </Grid2>
            ))}
        </ProductList>
      )}
    </Box>
  );
};

export default FavoriteProducts;
