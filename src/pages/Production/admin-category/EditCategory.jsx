/* eslint-disable react/prop-types */
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useUpdateCategoryMutation } from "../../../service/category";

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
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const TextFieldStyled = styled(TextField)(() => ({
  width: "90%",
  fontSize: "20px",
  marginBottom: "20px",
}));
const EditCategory = ({
  open,
  setOpen,
  refetch,
  categoryId,
  categoryEdited,
}) => {
  const [newCategory, setNewCategory] = useState({
    name: categoryEdited?.name,
    description: categoryEdited?.description,
  });
  const [updateCategory] = useUpdateCategoryMutation();

  const handleClose = () => setOpen(false);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.name) {
      toast.error("Category name is required");
      return;
    }

    try {
      const result = await updateCategory({
        categoryId: categoryId,
        updatedCategory: {
          name: newCategory.name,
          description: newCategory.description,
        },
      }).unwrap();

      if (result.error) {
        toast.error(result.error);
      } else {
        await refetch();
        toast.success(`${result.name} is updated`);
        handleClose();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setNewCategory({ ...categoryEdited });
  }, [categoryEdited]);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h4" mb={"30px"}>
          Cập nhật category
        </Typography>
        <TextFieldStyled
          defaultValue={newCategory?.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
          required
          label="Nhập tên Category"
        />
        <TextFieldStyled
          defaultValue={newCategory?.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
          label="Nhập mô tả"
        />
        <Button
          variant="contained"
          sx={{ width: "90%" }}
          onClick={handleUpdateCategory}
        >
          Cập nhật
        </Button>
      </Box>
    </Modal>
  );
};

export default EditCategory;
