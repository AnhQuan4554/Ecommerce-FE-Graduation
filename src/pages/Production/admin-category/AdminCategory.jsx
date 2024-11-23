import React, { useState } from "react";
import styled from "styled-components";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { toast } from "react-toastify";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContainerAdmin from "../../../components/common/admin/ContainerAdmin";
import {
  useDeleteCategoryMutation,
  useFetchCategoriesQuery,
} from "../../../service/category";
import AdminTable from "../../../components/common/admin/AdminTable";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

const ContainerBtnAction = styled(Box)(() => ({
  display: "flex",
  gap: "50px",
  alignItems: "center",
}));
const AdminCategory = () => {
  const { currentData, isLoading, refetch } = useFetchCategoriesQuery();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [deleteCategory] = useDeleteCategoryMutation();
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Tên loại ",
      description: "",
      // sortable: false,
      width: 260,
    },
    {
      field: "description",
      headerName: "Mô tả",
      description: "",
      // sortable: false,
      width: 460,
    },
    {
      field: "action",
      headerName: "Hành động",
      description: "",
      sortable: false,
      width: 360,
      renderCell: (item) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Button
              disabled={!rowSelectionModel.includes(item.id)}
              onClick={() => setOpenEdit(true)}
            >
              <ModeEditIcon sx={{ width: "30px", height: "30px", mr: "6px" }} />
            </Button>
            <Button
              disabled={!rowSelectionModel.includes(item.id)}
              onClick={handleDeleteCategory}
            >
              <DeleteIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
          </Box>
        );
      },
    },
  ];

  const handleDeleteCategory = async () => {
    try {
      const result = await deleteCategory(rowSelectionModel).unwrap();

      if (result.error) {
        toast.error(result.error);
      } else {
        await refetch();
        toast.success(`${result.message}`);
        setRowSelectionModel([]);
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Category delection failed. Tray again.");
    }
  };
  return (
    <ContainerAdmin>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "20px",
          mb: "30px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {"Category Lists"}
        </Typography>
        <Box>
          <ContainerBtnAction>
            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#d7000e",
                width: "fit-content",
                color: "#fff",
                padding: "10px",
              }}
              onClick={() => {
                setOpen(true);
              }}
            >
              {"Add Category"}
            </Button>
            <Button
              onClick={handleDeleteCategory}
              disabled={rowSelectionModel?.length === 0}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#d7000e",
                width: "fit-content",
                padding: "10px",
                border: `1px solid black`,
                color: "#fff",
                "&:disabled": {
                  opacity: 0.7,
                },
              }}
            >
              Xóa
            </Button>
          </ContainerBtnAction>
        </Box>

        <AddCategory open={open} setOpen={setOpen} refetch={refetch} />
        <EditCategory
          open={openEdit}
          setOpen={setOpenEdit}
          refetch={refetch}
          categoryId={rowSelectionModel[0]}
          categoryEdited={
            currentData &&
            currentData.find((item) => item._id === rowSelectionModel[0])
          }
        />
      </Box>
      {isLoading ? (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "46%",
            left: "50%",
            transform: "translateX( -50%)",
          }}
          size={100}
        />
      ) : (
        <Box sx={{ width: "100%" }}>
          <AdminTable
            columns={columns}
            currentData={currentData}
            setRowSelectionModel={setRowSelectionModel}
          />
        </Box>
      )}
    </ContainerAdmin>
  );
};

export default AdminCategory;
