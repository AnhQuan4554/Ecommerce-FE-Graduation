/* eslint-disable react/prop-types */
import {
  Autocomplete,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../service/product";
import { brandData } from "./BrandData";
import { useFetchCategoriesQuery } from "../../../service/category";
import { toast } from "react-toastify";
import { skipToken } from "@reduxjs/toolkit/query";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  height: "100vh",
  overflow: "scroll",
};
const TextFieldStyled = styled(TextField)(() => ({
  width: "90%",
  fontSize: "20px",
  marginBottom: "20px",
}));
const EditProduct = ({ open, setOpen, refetchGetList, id }) => {
  const { currentData, isLoading, refetch } = useGetProductByIdQuery(
    open ? id : skipToken
  );
  const categoriesQuery = useFetchCategoriesQuery();
  const [updateProduct] = useUpdateProductMutation();
  const [productCurrently, setProductCurrently] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const handleClose = async () => {
    setOpen(false);
    await refetchGetList();
  };

  useEffect(() => {
    setProductCurrently(currentData);
  }, [currentData, isLoading]);

  useEffect(() => {
    if (!categoriesQuery.isLoading) {
      const data = categoriesQuery.currentData.map((item) => ({
        label: item.name,
        value: item._id,
      }));
      setCategoryList([...data]);
    }
  }, [categoriesQuery.currentData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("currentData when submit++", productCurrently);
      const productData = new FormData();

      productData.append("name", productCurrently.name);
      productData.append("description", productCurrently.description);
      productData.append("price", productCurrently.price);
      productData.append("category", productCurrently.category);
      productData.append("quantitySold", productCurrently.quantitySold || 0);
      productData.append("quantity", productCurrently.quantity || 0);
      productData.append("brand", productCurrently.brand);
      productData.append("countInStock", productCurrently.countInStock);

      const data = await updateProduct({ productId: id, productData });
      if (data.error) {
        toast.error("Lỗi khi cập nhật sản phẩm");
      } else {
        toast.success(`${data.name} được tạo`);
        refetch();
        handleClose();
        await refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi cập nhật sản phẩm");
    }
  };

  return (
    productCurrently && (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" mb={"30px"}>
            Cập nhật sản phẩm
          </Typography>
          <TextFieldStyled
            defaultValue={productCurrently?.name}
            onChange={(e) =>
              setProductCurrently({ ...productCurrently, name: e.target.value })
            }
            required
            label="Nhập tên sản phẩm"
          />
          <Autocomplete
            defaultValue={
              brandData.find((item) => item?.value == productCurrently?.brand)
                ?.label
            }
            disablePortal
            options={brandData}
            loading={isLoading}
            onChange={(e, newValue) =>
              setProductCurrently({
                ...productCurrently,
                brand: newValue.value,
              })
            }
            sx={{ width: 300, mb: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label="Chọn hãng" />
            )}
          />
          <Autocomplete
            defaultValue={
              categoryList.find(
                (item) => item?.value == productCurrently?.category
              )?.label
            }
            disablePortal
            options={categoryList}
            onChange={(e, newValue) =>
              setProductCurrently({
                ...productCurrently,
                category: newValue.value,
              })
            }
            sx={{ width: 300, mb: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label="Chọn loại" />
            )}
          />
          <TextFieldStyled
            defaultValue={productCurrently?.description}
            onChange={(e) =>
              setProductCurrently({
                ...productCurrently,
                description: e.target.value,
              })
            }
            required
            label="Nhập mô tả"
          />
          <TextFieldStyled
            defaultValue={productCurrently?.price}
            onChange={(e) =>
              setProductCurrently({
                ...productCurrently,
                price: e.target.value,
              })
            }
            required
            type="number"
            label="Nhập giá"
          />
          <TextFieldStyled
            defaultValue={productCurrently?.countInStock}
            onChange={(e) =>
              setProductCurrently({
                ...productCurrently,
                countInStock: e.target.value,
              })
            }
            required
            type="number"
            label="Nhập số lượng nhập về"
          />
          <Button onClick={handleSubmit}>Cập nhật sản phẩm mới</Button>
        </Box>
      </Modal>
    )
  );
};

export default EditProduct;
