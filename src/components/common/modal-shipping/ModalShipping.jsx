/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { convertVNDToUSD } from "../../../utils/convertVNDToUSD";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../../service/order";
import { useNavigate } from "react-router-dom";
import { addToOrder } from "../../../redux/orderSlice";

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
const TextFieldStyled = styled(TextField)(() => ({
  width: "90%",
  fontSize: "20px",
  marginBottom: "20px",
}));
const ModalShipping = ({ open, setOpen, totalPay, productDetailData }) => {
  const { userInfo } = useSelector((state) => state.user);
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "0",
    country: "Việt Nam",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      const res = await createOrder({
        orderItems: [productDetailData],
        shippingAddress,
        paymentMethod,
        userId: userInfo?._id,
      });
      dispatch(addToOrder(res && res?.data));
      // dispatch(clearCartItems());
      navigate(`/payment`);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h4" mb={"30px"}>
          Nhập thông tin vận chuyển
        </Typography>
        <TextFieldStyled
          required
          label="Nhập số điện thoại"
          type="number"
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, phone: e.target.value })
          }
        />
        <TextFieldStyled
          required
          label="Nhập địa chỉ"
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, address: e.target.value })
          }
        />
        <TextFieldStyled
          required
          label="Nhập thành phố"
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, city: e.target.value })
          }
        />
        <FormControl
          sx={{
            width: "100%",
            padding: "10px 40px",
          }}
        >
          <FormLabel id="demo-radio-buttons-group-label">
            Chọn phương thức thanh toán
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel
              value="PayPal"
              control={<Radio />}
              label="PayPal or Credit Card"
            />
            <FormControlLabel
              value="Cash"
              control={<Radio />}
              label="Thanh toán sau nhận hàng"
            />
          </RadioGroup>
        </FormControl>

        <Box sx={{ width: "100%", padding: "10px  45px" }}>
          <Typography variant="h5"> Tổng số tiền phải trả</Typography>
          <Typography variant="h5"> {convertVNDToUSD(totalPay)}</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ width: "90%" }}
          onClick={handleSubmit}
        >
          Xác nhận tạo đơn mua
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalShipping;
