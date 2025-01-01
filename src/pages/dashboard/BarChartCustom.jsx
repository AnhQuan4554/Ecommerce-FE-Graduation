import { Box, CircularProgress } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import React from "react";
import styled from "styled-components";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useGetTotalSalesByMonthQuery } from "../../service/order";

const WrapBarChartCustom = styled(Box)(() => ({
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

const chartSetting = {
  yAxis: [
    {
      label: "",
    },
  ],
  width: 1100,
  height: 600,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
const BarChartCustom = () => {
  const { data: totalByMonth, isLoading: loadingTotalByMonth } =
    useGetTotalSalesByMonthQuery();

  console.log("totalByMonth", totalByMonth);
  return (
    <WrapBarChartCustom>
      {loadingTotalByMonth ? (
        <CircularProgress size={60} />
      ) : (
        <BarChart
          dataset={totalByMonth && totalByMonth}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "totalSales", label: "Tổng tiền" },
            { dataKey: "totalCash", label: "Thu từ tiền mặt" },
            { dataKey: "totalPaypal", label: "Thu từ Paypal" },
          ]}
          {...chartSetting}
        />
      )}
    </WrapBarChartCustom>
  );
};

export default BarChartCustom;
