import React, { useState } from "react";
import AdminTable from "../../components/common/admin/AdminTable";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ContainerBtnAction } from "../../components/common/admin/AdminHeader";
import ContainerAdmin from "../../components/common/admin/ContainerAdmin";
import ImgProductTable from "../../components/common/admin/ImgProduct";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart?.cartItems);

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
      width: 350,
    },

    {
      field: "price",
      headerName: "Giá",
      type: "number",
      width: 200,
      renderCell: (params) => {
        const { row } = params;
        return row.price.toLocaleString("vi-VN");
      },
    },
    {
      field: "quantity",
      headerName: "Số lượng",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "",
      headerName: "Tổng tiền",
      type: "number",
      width: 200,
      renderCell: (params) => {
        const { row } = params;
        return (row.quantity * row.price).toLocaleString("vi-VN");
      },
    },

    {
      field: "action",
      headerName: "Chỉnh sửa",
      sortable: false,
      width: 220,
      editable: true,
      renderCell: (item) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Button
              variant="contained"
              disabled={!rowSelectionModel.includes(item.id)}
              // onClick={handleOpenEditModal}
            >
              Xác nhận mua
              {/* <ModeEditIcon sx={{ width: "30px", height: "30px", mr: "6px" }} /> */}
            </Button>
            <Button
              disabled={!rowSelectionModel.includes(item.id)}
              // onClick={handleDeleteProduct}
            >
              <DeleteIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
          </Box>
        );
      },
    },
  ];
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
          {"Danh sách sản phẩm trong giỏ hàng"}
        </Typography>
        <Box>
          <ContainerBtnAction>
            <Button
              // onClick={handleDeleteProduct}
              variant="contained"
              disabled={rowSelectionModel?.length === 0}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "fit-content",
                padding: "10px",
                border: `1px solid black`,
                color: "#fff",
                "&:disabled": {
                  opacity: 0.7,
                },
              }}
            >
              Mua sản phẩm
            </Button>
            <Button
              // onClick={handleDeleteProduct}
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

        {/* <AddProductModel
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
      /> */}
      </Box>

      <Box sx={{ width: "100%" }}>
        <AdminTable
          columns={columns}
          currentData={(cart && cart) || []}
          setRowSelectionModel={setRowSelectionModel}
        />
      </Box>
    </ContainerAdmin>
  );
};

export default Cart;
