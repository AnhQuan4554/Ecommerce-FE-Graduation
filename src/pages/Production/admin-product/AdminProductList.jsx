import AdminHeader from "../../../components/common/admin/AdminHeader";
import ContainerAdmin from "../../../components/common/admin/ContainerAdmin";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetAllProductsQuery } from "../../../service/product";
import { CircularProgress } from "@mui/material";
import ImgProductTable from "../../../components/common/admin/ImgProduct";
import { useState } from "react";
import AdminTable from "../../../components/common/admin/AdminTable";

const columns = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Ảnh sản phẩm",
    sortable: false,
    width: 200,
    editable: true,
    renderCell: (params) => {
      console.log("param++", params);
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
  },
];

const AdminProductList = () => {
  const { currentData, isLoading } = useGetAllProductsQuery();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  return (
    <ContainerAdmin>
      <AdminHeader
        buttonName={"Add Product"}
        title={"Product Lists"}
        rowSelectionModel={rowSelectionModel}
      />

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
