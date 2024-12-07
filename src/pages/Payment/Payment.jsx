import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import {
  ContainerPaymentPageStyled,
  DriverInforStyled,
  ItemInforStyled,
  TextFiledStyled,
} from "./Payment.styled";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { convertVNDToUSDForPay } from "../../utils/convertVNDToUSD";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { orderInfo } = useSelector((state) => state.order);
  const navigate = useNavigate();

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          { amount: { value: convertVNDToUSDForPay(orderInfo?.totalPrice) } },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onError(err) {
    toast.error("Lỗi thanh toán");
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const payerName = details.payer.name.given_name;
      // toast.error(err.message);
      // alert(`Transaction completed by ${payerName}`);
    });
  };
  // update order and delivery
  const handleDelivery = () => {
    navigate(`/order`);
  };
  return (
    <>
      {orderInfo && (
        <ContainerPaymentPageStyled container>
          <Grid2 size={8}>
            <Typography variant="h4">Đơn hàng của bạn</Typography>
            <DriverInforStyled>
              <ItemInforStyled>
                <TextFiledStyled
                  disabled={true}
                  label={"Số điện thoại"}
                  value={orderInfo?.shippingAddress?.phone}
                />
              </ItemInforStyled>
              <ItemInforStyled>
                <TextFiledStyled
                  disabled={true}
                  label={"Địa chỉ"}
                  value={orderInfo?.shippingAddress?.address}
                />
              </ItemInforStyled>
              <ItemInforStyled>
                <TextFiledStyled
                  disabled={true}
                  label={"Thành phố"}
                  value={orderInfo?.shippingAddress?.city}
                />
              </ItemInforStyled>
              <ItemInforStyled>
                <TextFiledStyled
                  disabled={true}
                  label={"Phương thức thanh toán"}
                  value={
                    orderInfo?.paymentMethod === "Cash"
                      ? "Tiền mặt"
                      : orderInfo?.paymentMethod
                  }
                />
              </ItemInforStyled>
            </DriverInforStyled>
          </Grid2>
          <Grid2 size={4}>
            {orderInfo?.paymentMethod === "Cash" ? (
              <Typography variant="h5" fontWeight={700} mb={"20px"}>
                Tổng số tiền thanh toán : {orderInfo?.totalPrice} VNĐ
              </Typography>
            ) : (
              <Typography variant="h5" fontWeight={700} mb={"20px"}>
                Tổng số tiền thanh toán :{" "}
                {convertVNDToUSDForPay(orderInfo?.totalPrice)} $
              </Typography>
            )}

            {orderInfo?.paymentMethod === "Cash" ? (
              <Button variant="contained" onClick={handleDelivery}>
                Xác nhận đặt hàng
              </Button>
            ) : (
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
              ></PayPalButtons>
            )}
          </Grid2>
        </ContainerPaymentPageStyled>
      )}
    </>
  );
};

export default Payment;
