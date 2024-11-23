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
  useCreateProductMutation,
  useUploadProductImageMutation,
} from "../../../service/product";
import { toast } from "react-toastify";
import { useFetchCategoriesQuery } from "../../../service/category";

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

const AddProductModel = ({ open, setOpen, refetch }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: [],
    brand: "",
    quantitySold: 0,
    quantity: "",
    category: "",
    description: "",
    price: "",
    countInStock: 0,
  });
  const [imageUrl, setImageUrl] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const [uploadProductImage] = useUploadProductImageMutation();
  const [createProduct, { reset }] = useCreateProductMutation();
  const handleClose = () => setOpen(false);
  const categoriesQuery = useFetchCategoriesQuery();

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    Array.from(e.target.files).forEach((file) => {
      formData.append("image", file);
    });
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setNewProduct({ ...newProduct, image: [...res.images] });
      setImageUrl(res.images);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const top100Films = [
    { label: "The Shawshank Redemption", value: 1994 },
    { label: "The Godfather", value: 1972 },
  ];
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
      const productData = new FormData();
      productData.append("image", [...newProduct.image]);

      productData.append("name", newProduct.name);
      productData.append("description", newProduct.description);
      productData.append("price", newProduct.price);
      productData.append("category", newProduct.category);
      productData.append("quantitySold", newProduct.quantitySold || 0);
      productData.append("quantity", newProduct.quantity || 0);
      productData.append("brand", newProduct.brand);
      productData.append("countInStock", newProduct.countInStock);

      const { data } = await createProduct(productData);

      if (data.error) {
        toast.error("Product create failed. Try Again.");
      } else {
        toast.success(`${data.name} is created`);
        reset();
        handleClose();
        await refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Product create failed. Try Again.");
    }
  };

  //reset forrm
  useEffect(() => {
    if (!open) {
      setImageUrl([]);
      setNewProduct({
        name: "",
        image: [],
        brand: "",
        quantitySold: 0,
        quantity: "",
        category: "",
        description: "",
        price: "",
        countInStock: 0,
      });
    }
  }, [open]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4" mb={"30px"}>
          Thêm sản phẩm mới
        </Typography>
        <TextFieldStyled
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          required
          label="Nhập tên sản phẩm"
        />
        <Button
          component="label"
          sx={{
            mt: "10px",
            mb: "10px",
            width: "90%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography mr={"30px"}>Hãy chọn ảnh sản phẩm</Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={uploadFileHandler}
          />
        </Button>

        {imageUrl && (
          <Box
            sx={{
              width: "90%",
              gap: 4,
              maxHeight: "40px",
              display: "flex",
              mb: "40px",
            }}
          >
            {imageUrl &&
              imageUrl.map((url, index) => (
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    maxWidth: "40px",
                  }}
                  key={index}
                  src={url}
                  alt="product"
                />
              ))}
          </Box>
        )}

        <Autocomplete
          disablePortal
          options={top100Films}
          loading={categoriesQuery.isLoading}
          onChange={(e, newValue) =>
            setNewProduct({ ...newProduct, brand: newValue.value })
          }
          sx={{ width: 300, mb: "20px" }}
          renderInput={(params) => <TextField {...params} label="Chọn hãng" />}
        />
        <Autocomplete
          disablePortal
          options={categoryList}
          onChange={(e, newValue) =>
            setNewProduct({ ...newProduct, category: newValue.value })
          }
          sx={{ width: 300, mb: "20px" }}
          renderInput={(params) => <TextField {...params} label="Chọn loại" />}
        />
        <TextFieldStyled
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          required
          label="Nhập mô tả"
        />
        <TextFieldStyled
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          required
          type="number"
          label="Nhập giá"
        />
        <TextFieldStyled
          onChange={(e) =>
            setNewProduct({ ...newProduct, countInStock: e.target.value })
          }
          required
          type="number"
          label="Nhập số lượng nhập về"
        />
        <Button onClick={handleSubmit}>Tạo sản phẩm mới</Button>
      </Box>
    </Modal>
  );
};

export default AddProductModel;
