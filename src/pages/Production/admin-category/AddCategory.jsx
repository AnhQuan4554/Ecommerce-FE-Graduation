import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useCreateCategoryMutation } from "../../../service/category";

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
const AddCategory = ({ open, setOpen, refetch }) => {
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });
  const [createCategory] = useCreateCategoryMutation();

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    if (!newCategory.name) {
      toast.error("Category name is required");
      return;
    }

    try {
      const result = await createCategory({
        name: newCategory.name,
        description: newCategory.description,
      }).unwrap();
      if (result.error) {
        toast.error(result.error);
      } else {
        setNewCategory({ name: "", description: "" });
        toast.success(`${result.name} is created.`);
        handleClose();
        await refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Creating category failed, try again.");
    }
  };
  useEffect(() => {
    if (!open) {
      setNewCategory({
        name: "",
        description: "",
      });
    }
  }, [open]);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h4" mb={"30px"}>
          Thêm category mới
        </Typography>
        <TextFieldStyled
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
          required
          label="Nhập tên Category"
        />
        <TextFieldStyled
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
          label="Nhập mô tả"
        />
        <Button
          variant="contained"
          sx={{ width: "90%" }}
          onClick={handleCreateCategory}
        >
          Tạo category mới
        </Button>
      </Box>
    </Modal>
  );
};

export default AddCategory;
