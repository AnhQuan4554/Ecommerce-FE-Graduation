/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { isDeepEqual } from "@mui/x-data-grid/internals";
import React, { useEffect, useState } from "react";
import { usePayOrderMutation } from "../../service/order";
import { toast } from "react-toastify";

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
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const OrderModal = ({ open, setOpen, refetchGetOrderList, orderDataTable }) => {
  const [isDelivery, setIsDelivery] = useState(orderDataTable?.isDelivered);
  const [isPayment, setIsPayment] = useState(orderDataTable?.isPaid);

  useEffect(() => {
    setIsDelivery(orderDataTable?.isDelivered);
    setIsPayment(orderDataTable?.isPaid);
  }, [orderDataTable?.isDelivered, orderDataTable?.isDelivered]);

  const [payOrder, { isLoading }] = usePayOrderMutation();

  const handleChangeDelivery = (event) => {
    setIsDelivery(event.target.value);
  };
  const handleChangePayment = (event) => {
    setIsPayment(event.target.value);
  };
  const handleUpdateOrder = async () => {
    const response = await payOrder({
      orderId: orderDataTable?._id,
      statusDelivery: 1,
    });
    if (response?.data?.status === "success") {
      toast.success("Cập nhật thành công");
      setTimeout(() => {
        refetchGetOrderList();
        handleClose();
      }, 1000);
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <FormControl variant="filled" fullWidth sx={{ gap: "20px" }}>
          <Select
            sx={{
              backgroundColor: "#fff",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isDelivery}
            label="Age"
            onChange={handleChangeDelivery}
          >
            <MenuItem value={0}>Chưa vận chuyển</MenuItem>
            <MenuItem value={1}>Đang vận chuyển</MenuItem>
            <MenuItem value={2}>Đã giao</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" fullWidth sx={{ mt: "30px" }}>
          <Select
            sx={{
              backgroundColor: "#fff",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isPayment}
            label="Trạng thái thanh toán"
            onChange={handleChangePayment}
          >
            <MenuItem value={false}>Chưa thánh toán</MenuItem>
            <MenuItem value={true}>Đã thanh toán</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{ width: "90%", mt: "30px" }}
          onClick={handleUpdateOrder}
        >
          Tạo category mới
        </Button>
      </Box>
    </Modal>
  );
};

export default OrderModal;
