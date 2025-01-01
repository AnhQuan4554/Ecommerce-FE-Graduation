import React, { useState } from "react";
import AdminTable from "../../components/common/admin/AdminTable";
import ContainerAdmin from "../../components/common/admin/ContainerAdmin";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ContainerBtnAction } from "../../components/common/admin/AdminHeader";
import { useGetAllUserQuery } from "../../service/user";

const ManageUser = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [open, setOpen] = React.useState(false);
  const { currentData, isLoading, refetch } = useGetAllUserQuery();
  console.log("currentData+++", currentData);
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Tên khách hàng",
      description: "",
      sortable: false,
      editable: false,
      width: 260,
    },
    {
      field: "email",
      headerName: "Email",
      description: "",
      editable: false,
      width: 460,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      description: "",
      editable: false,
      width: 460,
    },
    {
      field: "action",
      headerName: "Hành động",
      description: "",
      editable: false,
      width: 360,
      renderCell: (item) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            {/* <Button
              disabled={!rowSelectionModel.includes(item.id)}
              onClick={() => setOpenEdit(true)}
            >
              <ModeEditIcon sx={{ width: "30px", height: "30px", mr: "6px" }} />
            </Button> */}
            <Button
              disabled={!rowSelectionModel.includes(item.id)}
              onClick={() => {}}
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
          {"Danh sách người dùng"}
        </Typography>
        <Box>
          <ContainerBtnAction>
            <Button
              onClick={() => {}}
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

export default ManageUser;
