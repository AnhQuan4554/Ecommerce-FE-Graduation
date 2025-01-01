import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../service/product";
import styled from "styled-components";
import { Box, CircularProgress, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const WrapPieChartCustom = styled(Box)(() => ({
  marginTop: "20px",
}));
const WrapPieChartItem = styled(Box)(() => ({
  marginTop: "20px",
}));

const PieChartCustom = () => {
  const { currentData: allProduct, isLoading } = useGetAllProductsQuery();
  const [productPhone, setProductPhone] = useState([]);
  const [productLaptop, setProductLaptop] = useState([]);

  useEffect(() => {
    if (allProduct && allProduct?.length > 0) {
      const phoneData = allProduct
        ?.filter(
          (item) =>
            item.brand === "1" ||
            item.brand === "2" ||
            item.brand === "3" ||
            item.brand === "4" ||
            item.brand === "5" ||
            item.brand === "6"
        )
        ?.map((data) => ({
          id: data?._id,
          value: data?.quantitySold,
          label: data?.name,
        }));
      const laptopData = allProduct
        .filter(
          (item) =>
            item.brand === "7" ||
            item.brand === "8" ||
            item.brand === "9" ||
            item.brand === "10" ||
            item.brand === "11" ||
            item.brand === "12"
        )
        ?.map((data) => ({
          id: data?._id,
          value: data?.quantitySold,
          label: data?.name,
        }));
      setProductPhone(phoneData);
      setProductLaptop(laptopData);
    }
  }, [allProduct]);

  return (
    <WrapPieChartCustom>
      {isLoading ? (
        <CircularProgress size={60} />
      ) : (
        <>
          <WrapPieChartItem>
            <Typography variant="h4">Thống kê điện thoại bán được</Typography>
            <PieChart
              series={[
                {
                  data: (productPhone && productPhone) || [],
                },
              ]}
              width={1000}
              height={400}
            />
          </WrapPieChartItem>
          <WrapPieChartItem>
            <Typography variant="h4">Thống kê laptop bán được</Typography>

            <PieChart
              series={[
                {
                  data: (productLaptop && productLaptop) || [],
                },
              ]}
              width={1000}
              height={400}
            />
          </WrapPieChartItem>
        </>
      )}
    </WrapPieChartCustom>
  );
};

export default PieChartCustom;
