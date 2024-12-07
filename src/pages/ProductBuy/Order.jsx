import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ImgProductTable from "../../components/common/admin/ImgProduct";
import { useGetMyOrdersQuery } from "../../service/order";
import { useSelector } from "react-redux";
import { formatDateFromString } from "../../utils/formatDate";
import ContainerAdmin from "../../components/common/admin/ContainerAdmin";
import AdminTable from "../../components/common/admin/AdminTable";

const Order = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null);
  const [orderDataTable, setOrderDataTable] = useState(null);

  useEffect(() => {
    if (userInfo?._id) {
      setUserId(userInfo._id); // Đặt giá trị userId sau khi userInfo có sẵn
    }
  }, [userInfo]);
  console.log(userInfo);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const {
    currentData: orderList,
    isLoading,
    refetch,
  } = useGetMyOrdersQuery(userInfo && userInfo?._id, {
    skip: !userId, // Bỏ qua query nếu userId chưa được đặt
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
      width: 250,
      renderCell: (row) => {
        console.log("isDelivered++++", row.value);
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
              {row.value ? "Đang vận chuyển" : "Chưa vận chuyển"}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "isPaid",
      headerName: "Tình trạng thanh toán",
      width: 250,
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
      width: 300,
      renderCell: (row) => {
        console.log("value of shippingAddress", row);
        return <Box>`${row.value}`</Box>;
      },
    },
    {
      field: "action",
      headerName: "Chỉnh sửa",
      sortable: false,
      width: 150,
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
              onClick={handleDeleteOrder}
            >
              <DeleteIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
          </Box>
        );
      },
    },
  ];
  const handleOpenEditModal = () => {
    // user can't edit if delived
  };
  const handleDeleteOrder = () => {
    // user can't edit if delived show toat
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
    </ContainerAdmin>
  );
};

export default Order;
