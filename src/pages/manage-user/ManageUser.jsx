import React, { useEffect, useState } from "react";
import AdminTable from "../../components/common/admin/AdminTable";
import ContainerAdmin from "../../components/common/admin/ContainerAdmin";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ContainerBtnAction } from "../../components/common/admin/AdminHeader";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
  useMakeAdminMutation,
} from "../../service/user";
import { useGetOrdersQuery } from "../../service/order";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { toast } from "react-toastify";
import ModalConfirm from "../../components/common/ModalConfirm";
const ManageUser = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  // const [open, setOpen] = React.useState(false);
  const { currentData: userList, isLoading, refetch } = useGetAllUserQuery();
  const [userNotAdmin, setUserNotAdmin] = useState([]);
  const { currentData: orderList } = useGetOrdersQuery();
  const [openEdit, setOpenEdit] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenAdmin, setIsOpenAdmin] = useState(false);

  const [deleteUser] = useDeleteUserMutation();
  const [makeAdmin] = useMakeAdminMutation();
  useEffect(() => {
    const listUser = userList?.filter((item) => !item?.isAdmin);
    setUserNotAdmin(listUser);
  }, [userList]);

  const handleOpenDeleteUser = () => {
    if (rowSelectionModel?.length > 1) {
      toast.warning("Không thể chọn nhiều hơn 1 khách hàng để xóa");
      return;
    }
    setIsOpenConfirm(true);
  };
  const handleOpenMakeAdmin = () => {
    if (rowSelectionModel?.length > 1) {
      toast.warning("Không thể chọn nhiều hơn 1 khách hàng để cập nhật quyền");
      return;
    }
    setIsOpenAdmin(true);
  };
  const handleDeleteUser = async () => {
    try {
      const response = await deleteUser(rowSelectionModel[0]);
      if (response.data.status === "success") {
        refetch();
        toast.success("Xóa thành công", { autoClose: 1000 });
      }
    } catch (error) {
      console.log("delete user err", error);
    }
  };
  const handleMakeAdmin = async () => {
    try {
      const response = await makeAdmin(rowSelectionModel[0]);
      if (response.data.status === "success") {
        refetch();
        toast.success("Cập nhật quyền thành công", { autoClose: 1000 });
      }
    } catch (error) {
      console.log("make admin err", error);
    }
  };
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
      width: 220,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      description: "",
      editable: false,
      width: 200,
    },
    {
      field: "phone",
      headerName: "Tổng đơn hàng đặt",
      description: "",
      editable: false,
      width: 200,
      renderCell: (params) => {
        const { id } = params;
        const orderOfUser = orderList?.filter((item) => item?.user?._id == id);

        return orderOfUser?.length;
      },
    },
    {
      field: "",
      headerName: "Tổng số tiền",
      description: "",
      editable: false,
      width: 200,
      sortable: false,
      renderCell: (params) => {
        const { id } = params;
        const orderOfUser = orderList?.filter((item) => item?.user?._id == id);
        const totalItemsPrice = orderOfUser?.reduce(
          (acc, item) => acc + (item.totalPrice || 0),
          0
        );
        return totalItemsPrice?.toLocaleString();
      },
    },
    {
      field: "action",
      headerName: "Hành động",
      description: "",
      editable: false,
      width: 200,
      renderCell: (item) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Button
              disabled={!rowSelectionModel.includes(item.id)}
              onClick={handleOpenMakeAdmin}
            >
              <SupervisorAccountIcon
                sx={{
                  width: "30px",
                  height: "30px",
                  mr: "6px",
                }}
              />
            </Button>
            <Button
              disabled={!rowSelectionModel.includes(item.id)}
              onClick={handleOpenDeleteUser}
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
        {/* <Box>
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
        </Box> */}
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
            currentData={userNotAdmin && userNotAdmin}
            setRowSelectionModel={setRowSelectionModel}
          />
        </Box>
      )}
      <ModalConfirm
        open={isOpenConfirm}
        setOpen={setIsOpenConfirm}
        message={`Bạn có chắc chắn muốn xóa người dùng này`}
        actionConfirm={handleDeleteUser}
      />
      <ModalConfirm
        open={isOpenAdmin}
        setOpen={setIsOpenAdmin}
        message={`Bạn có chắc chắn cho người này thành quản trị viên`}
        actionConfirm={handleMakeAdmin}
      />
    </ContainerAdmin>
  );
};

export default ManageUser;
