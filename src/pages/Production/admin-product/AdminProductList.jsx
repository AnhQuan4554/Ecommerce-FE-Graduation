import AdminHeader, {
  ContainerBtnAction,
} from "../../../components/common/admin/AdminHeader";
import ContainerAdmin from "../../../components/common/admin/ContainerAdmin";
import Box from "@mui/material/Box";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../../service/product";
import { Button, CircularProgress, Typography } from "@mui/material";
import ImgProductTable from "../../../components/common/admin/ImgProduct";
import { useState } from "react";
import AdminTable from "../../../components/common/admin/AdminTable";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import AddProductModel from "./AddProductModel";
import EditProduct from "./EditProduct";

const AdminProductList = () => {
  const { currentData, isLoading, refetch } = useGetAllProductsQuery();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [deleteProduct] = useDeleteProductMutation();
  const [openCategory, setOpenCategory] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "image",
      headerName: "Ảnh sản phẩm",
      sortable: false,
      width: 200,
      editable: true,
      renderCell: (params) => {
        return params && <ImgProductTable imgUrl={params.value[0]} />;
      },
    },
    {
      field: "name",
      headerName: "Tên sản phẩm",
      width: 250,

      editable: true,
    },
    {
      field: "category",
      headerName: "Loại hàng",
      width: 200,
      editable: true,
      valueGetter: (value) => value && value.name,
    },
    {
      field: "countInStock",
      headerName: "Sản phẩm trong kho",
      description: "",
      sortable: false,
      width: 160,
    },
    {
      field: "price",
      headerName: "Giá",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "rating",
      headerName: "Đánh giá",
      type: "number",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Chỉnh sửa",
      sortable: false,
      width: 110,
      editable: true,
      renderCell: (item) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Button
              disabled={!rowSelectionModel.includes(item.id)}
              onClick={handleOpenEditModal}
            >
              <ModeEditIcon sx={{ width: "30px", height: "30px", mr: "6px" }} />
            </Button>
            <Button
              disabled={!rowSelectionModel.includes(item.id)}
              onClick={handleDeleteProduct}
            >
              <DeleteIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
          </Box>
        );
      },
    },
  ];
  const handleOpenEditModal = () => {
    if (rowSelectionModel.length > 1) {
      toast.warning("Chỉ được chỉnh sửa từng sản phẩm một");
      return;
    }
    setOpenEdit(true);
  };
  const handleDeleteProduct = async () => {
    try {
      let answer = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (!answer) return;

      const { data } = await deleteProduct(rowSelectionModel);

      toast.success(`"${data.message}" is deleted`);
      // refetch data
      await refetch();
    } catch (err) {
      console.log(err);
      toast.error("Delete failed. Try again.");
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
          {"Product Lists"}
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
                setOpenCategory(true);
              }}
            >
              {"Thêm sản phẩm mới"}
            </Button>
            <Button
              onClick={handleDeleteProduct}
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

        <AddProductModel
          open={openCategory}
          setOpen={setOpenCategory}
          refetch={refetch}
          id={rowSelectionModel[0]}
        />
        <EditProduct
          open={openEdit}
          setOpen={setOpenEdit}
          refetchGetList={refetch}
          id={rowSelectionModel[0]}
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

export default AdminProductList;
