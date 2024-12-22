/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ImgProductTable from "../../components/common/admin/ImgProduct";
import {
  useDeleteOrderMutation,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  usePayOrderMutation,
} from "../../service/order";
import { useSelector } from "react-redux";
import { formatDateFromString } from "../../utils/formatDate";
import ContainerAdmin from "../../components/common/admin/ContainerAdmin";
import AdminTable from "../../components/common/admin/AdminTable";
import OrderModal from "./OrderModal";
import ModalConfirm from "../../components/common/ModalConfirm";
import { toast } from "react-toastify";

const Order = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [orderDataTable, setOrderDataTable] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [deleteOrder] = useDeleteOrderMutation();
  const [payOrder] = usePayOrderMutation();

  useEffect(() => {
    if (userInfo?._id) {
      setUserId(userInfo._id);
    }
    setIsAdmin(userInfo?.isAdmin);
  }, [userInfo]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  useEffect(() => {
    const data =
      orderDataTable?.length > 0 &&
      orderDataTable?.find((item) => item?._id === rowSelectionModel[0]);
    setSelectedOrder(data);
  }, [rowSelectionModel]);

  const {
    currentData: orderList,
    isLoading,
    refetch,
  } = useGetOrdersQuery({
    skip: !isAdmin,
  }) ||
  useGetMyOrdersQuery(userId, {
    skip: isAdmin || !userId,
  });
  // flat data respone
  useEffect(() => {
    const flatData =
      orderList &&
      orderList.map((item) => {
        const shippingAddress = `${item.shippingAddress.address} ${item.shippingAddress.city}`;
        return {
          _id: item._id,
          totalPrice: item.totalPrice,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          isDelivered: item.isDelivered,
          isPaid: item.isPaid,
          paymentMethod: item.paymentMethod,
          shippingAddress,
          user: item?.user,
        };
      });
    setOrderDataTable(flatData);
  }, [orderList]);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },

    {
      field: "createdAt",
      headerName: "Ngày tạo",
      width: 120,
      editable: true,
      valueGetter: (value) => {
        return value && formatDateFromString(value);
      },
    },
    {
      field: "isDelivered",
      headerName: "Tình trạng vận chuyển",
      width: 200,
      renderCell: (row) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                backgroundColor: `${
                  row.value == 0
                    ? "#9E9E9E"
                    : row.value == 1
                    ? "#2196F3 "
                    : "#4CAF50"
                }`,
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {row.value == 0
                ? "Chưa vận chuyển"
                : row.value == 1
                ? "Đang vận chuyển"
                : "Đã giao"}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "isPaid",
      headerName: "Tình trạng thanh toán",
      width: 200,
      renderCell: (row) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                backgroundColor: `${row.value ? "green" : "red"}`,
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {row.value ? "Đã thanh toán" : "Chưa thanh toán"}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "paymentMethod",
      headerName: "Phương thức thanh toán",
      width: 200,
    },
    {
      field: "shippingAddress",
      headerName: "Địa chỉ",
      width: 200,
      renderCell: (row) => {
        return <Box>{row.value}</Box>;
      },
    },
    {
      field: "user",
      headerName: "Tên người mua",
      width: 200,
      renderCell: (row) => {
        return <Box>{row?.value.username}</Box>;
      },
    },
    {
      field: "action",
      headerName: "Chỉnh sửa",
      sortable: false,
      width: 150,
      editable: true,
      renderCell: (item) => {
        const { isDelivered } = item?.row;
        if (isAdmin) {
          return (
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Button
                disabled={!rowSelectionModel.includes(item.id)}
                onClick={handleOpenEditModal}
              >
                <ModeEditIcon
                  sx={{ width: "30px", height: "30px", mr: "6px" }}
                />
              </Button>
              <Button
                disabled={!rowSelectionModel.includes(item.id)}
                onClick={handleOpenDeleteOrder}
              >
                <DeleteIcon sx={{ width: "30px", height: "30px" }} />
              </Button>
            </Box>
          );
        }

        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#7cdcb4",
            }}
          >
            {isDelivered === 2 ? (
              <Button
                disabled={!rowSelectionModel.includes(item.id)}
                onClick={handleOpenDeleteOrder}
              >
                Đã nhận được hàng
              </Button>
            ) : (
              <Button
                disabled={
                  !rowSelectionModel.includes(item.id) && isDelivered !== 0
                }
                onClick={handleOpenDeleteOrder}
              >
                <DeleteIcon sx={{ width: "30px", height: "30px" }} />
              </Button>
            )}
          </Box>
        );
      },
    },
  ];
  const handleOpenEditModal = () => {
    // user can't edit if delived
    setIsOpenModal(true);
  };
  const handleOpenDeleteOrder = () => {
    if (rowSelectionModel?.length > 1) {
      toast.warning("Không thể chọn nhiều hơn 1 đơn để xóa");
      return;
    }
    setIsOpenConfirm(true);
  };
  const handleDeleteOrder = async () => {
    try {
      const response = await deleteOrder(rowSelectionModel[0]);
      if (response.data.status === "success") {
        refetch();
      }
    } catch (error) {
      console.log("delete order err", error);
    }
  };
  const handleConfirmDeliveryByCustomer = async () => {
    const response = await payOrder({
      orderId: selectedOrder?._id,
      statusDelivery: 2,
    });
    if (response?.data?.status === "success") {
      toast.success("Cập nhật thành công");
      // setTimeout(() => {
      //   refetchGetOrderList();
      //   handleClose();
      // }, 1000);
    }
  };
  return (
    <ContainerAdmin>
      <Typography variant="h3" fontWeight={700} mb={"20px"}>
        Đơn hàng của bạn
      </Typography>
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
            currentData={orderDataTable && orderDataTable}
            setRowSelectionModel={setRowSelectionModel}
          />
        </Box>
      )}

      <OrderModal
        open={isOpenModal}
        setOpen={setIsOpenModal}
        refetchGetOrderList={refetch}
        orderDataTable={selectedOrder}
      />

      <ModalConfirm
        open={isOpenConfirm}
        setOpen={setIsOpenConfirm}
        message={`Bạn có chắc chắn muốn xóa đơn của ${selectedOrder?.user?.username}`}
        actionConfirm={handleDeleteOrder}
      />
    </ContainerAdmin>
  );
};

export default Order;
