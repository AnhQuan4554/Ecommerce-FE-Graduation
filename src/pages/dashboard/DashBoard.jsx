import React from "react";
import {
  useGetTotalOrdersQuery,
  useGetTotalSalesByMonthQuery,
  useGetTotalSalesQuery,
} from "../../service/order";
import { useGetAllUserQuery } from "../../service/user";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import CardCustom from "./CardCustom";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BarChartCustom from "./BarChartCustom";
import PieChartCustom from "./PieChartCustom";
const ContainerDashBoard = styled(Box)(() => ({
  padding: "20px",
}));
const WrapStatisticsCart = styled(Box)(() => ({
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

const DashBoard = () => {
  const { data: sales, isLoading } = useGetTotalSalesQuery();
  const { data: customers, isLoading: loading } = useGetAllUserQuery();
  const { data: orders, isLoading: loadingTwo } = useGetTotalOrdersQuery();

  return (
    <ContainerDashBoard>
      <Typography variant="h3">Thống kê dữ liệu của cửa hàng</Typography>
      <WrapStatisticsCart>
        <CardCustom
          icon={
            <MonetizationOnOutlinedIcon
              sx={{ width: "100%", height: "100%" }}
            />
          }
          title={"Lợi nhuận thu được"}
          valueText={`${sales?.totalSales} $`}
        />
        <CardCustom
          icon={
            <AccountCircleOutlinedIcon sx={{ width: "100%", height: "100%" }} />
          }
          title={"Tổng số người dùng"}
          valueText={`${customers?.length} `}
        />
        <CardCustom
          icon={
            <ShoppingCartOutlinedIcon sx={{ width: "100%", height: "100%" }} />
          }
          title={"Tổng số đơn hàng bán được"}
          valueText={`${orders?.totalOrders} `}
        />
      </WrapStatisticsCart>
      <BarChartCustom />
      <PieChartCustom />
    </ContainerDashBoard>
  );
};

export default DashBoard;
