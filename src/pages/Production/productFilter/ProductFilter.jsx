import { Autocomplete, Box, Button, Grid2, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { brandData } from "../admin-product/BrandData";
import { useFetchCategoriesQuery } from "../../../service/category";
import { useFilterProductsMutation } from "../../../service/product";
import ProductCard from "../../../components/common/product-card/ProductCard";

const WrapProductFilter = styled(Box)(() => ({
  marginTop: "30px",
  padding: "0 20px",
}));

const HeaderCondition = styled(Grid2)(() => ({
  marginBottom: "20px",
}));
const ProductList = styled(Grid2)(() => ({
  minHeight: "400px",
}));

const ProductFilter = () => {
  const categoriesQuery = useFetchCategoriesQuery();
  const [condition, setCondition] = useState({
    name: "",
    category: "",
    brand: "",
    priceStart: 0,
    priceEnd: 0,
    // 0 all product , 1 Phone , 2 Laptop
    typeProduct: 0,
  });
  const [filterProducts, { isLoading, data: listProduct }] =
    useFilterProductsMutation();
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    if (!categoriesQuery.isLoading) {
      const data = categoriesQuery.currentData?.map((item) => ({
        label: item.name,
        value: item._id,
      }));
      setCategoryList([{ label: "Tất cả", value: "" }, ...data]);
    }
  }, [categoriesQuery.currentData]);
  const handleSearch = async () => {
    await filterProducts(condition);
  };
  listProduct && console.log("listProduct", listProduct);
  return (
    <WrapProductFilter>
      <HeaderCondition container>
        <Grid2 size={4}>
          <TextField
            value={condition.name}
            label="Nhập tên sản phẩm"
            variant="outlined"
            onChange={(e) =>
              setCondition({ ...condition, name: e.target.value })
            }
          />
        </Grid2>
        <Grid2 size={4}>
          <Grid2 container>
            <Grid2 size={3.6}>
              <TextField
                value={condition.priceStart}
                type="number"
                inputProps={{ min: 0 }}
                label="Giá đầu"
                variant="outlined"
                onChange={(e) =>
                  setCondition({ ...condition, priceStart: e.target.value })
                }
              />
            </Grid2>
            <Grid2 size={3.6}>
              <TextField
                value={condition.priceEnd}
                type="number"
                inputProps={{ min: 0 }}
                label="Giá cuối"
                variant="outlined"
                onChange={(e) =>
                  setCondition({ ...condition, priceEnd: e.target.value })
                }
              />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={4}>
          <Autocomplete
            disablePortal
            options={brandData}
            onChange={(e, newValue) =>
              setCondition({ ...condition, brand: newValue.value })
            }
            sx={{ width: 300, mb: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label="Chọn hãng" />
            )}
          />
        </Grid2>
        <Grid2 size={4}>
          <Autocomplete
            disablePortal
            options={categoryList}
            onChange={(e, newValue) => {
              setCondition({ ...condition, category: newValue.value });
            }}
            sx={{ width: 300, mb: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label="Chọn kiểu sản phẩm" />
            )}
          />
        </Grid2>
        <Grid2 size={4}>
          <Autocomplete
            disablePortal
            options={[
              { label: "Tất cả", value: 0 },
              { label: "Điện thoại", value: 1 },
              { label: "Laptop", value: 2 },
            ]}
            onChange={(e, newValue) =>
              setCondition({
                ...condition,
                typeProduct: Number(newValue.value),
              })
            }
            sx={{ width: 300, mb: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label="Chọn loại sản phẩm" />
            )}
          />
        </Grid2>
        <Grid2 size={4}>
          <Button
            sx={{ height: "50px" }}
            variant="contained"
            onClick={handleSearch}
          >
            Lọc sản phẩm
          </Button>
        </Grid2>
      </HeaderCondition>
      {/* { isLoading ? } */}
      <ProductList container spacing={2}>
        {listProduct &&
          listProduct?.map((item) => (
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
    </WrapProductFilter>
  );
};

export default ProductFilter;
