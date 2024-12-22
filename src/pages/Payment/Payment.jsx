import { Box, Button, Grid2, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  ContainerPaymentPageStyled,
  DriverInforStyled,
  ItemInforStyled,
  TextFiledStyled,
} from "./Payment.styled";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { convertVNDToUSDForPay } from "../../utils/convertVNDToUSD";
import { useNavigate } from "react-router-dom";
import {
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from "../../service/order";

const Payment = () => {
  const { orderInfo } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const [payOrder, { isLoading, isSuccess: updatePaySuccess }] =
    usePayOrderMutation();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPaPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();
  if (errorPayPal) {
    console.log("errorPayPal++", errorPayPal);
  }
  useEffect(() => {
    if (!errorPayPal && !loadingPaPal && paypal.clientId) {
      const loadingPaPalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      loadingPaPalScript();
      // if (order && !order.isPaid) {
      // if (!window.paypal) {
      //   loadingPaPalScript();
      // }
      // }
    }
  }, [errorPayPal, paypal, paypalDispatch]);

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
    console.log("err when pay by paypal", err);
    toast.error("Lỗi thanh toán");
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const status = details?.status;
      if (status === "COMPLETED") {
        handleDelivery();
      } else {
        console.log(`Transaction not completed. Status: ${status}`);
      }
      // alert(`Transaction completed by ${payerName}`);
    });
  };
  // update order and delivery
  const handleDelivery = async () => {
    // handle update status Order
    if (orderInfo?.paymentMethod === "Cash") {
      toast.success("Đặt hàng thành công");
      setTimeout(() => {
        navigate(`/order`);
      }, 1000);
    } else {
      const response = await payOrder({
        orderId: orderInfo?._id,
        statusDelivery: 1,
      });
      if (response?.data?.status === "success") {
        toast.success("Đặt hàng thành công");
        setTimeout(() => {
          navigate(`/order`);
        }, 1000);
      }
    }
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
            ) : isPending ? (
              <div>Loading PayPal...</div>
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
