import React from "react";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductCard from "../common/product-card/ProductCard";
import phone01 from "../../assets/phone01.jpg";
import phone02 from "../../assets/phone02.jpg";
import phone03 from "../../assets/phone03.jpg";

const ContainerBestSeller = styled(Box)(() => ({
  backgroundColor: "#ea4750",
  borderTopLeftRadius: "35px",
  borderTopRightRadius: "35px",
  paddingTop: "20px",
}));

const BestSeller = () => {
  return (
    <Box sx={{ padding: "0 50px" }}>
      <ContainerBestSeller>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            margin: "10px",
            marginLeft: "40px",
            fontWeight: 700,
          }}
        >
          Sản phẩm bán chạy nhất
        </Typography>
        <Grid2 container spacing={2} padding={"50px"}>
          <Grid2 size={2.4}>
            <ProductCard
              reducePrice={12}
              imgUrl={phone01}
              productName={"Samsung Galaxy S24 Ultra 12GB 256GB"}
              description={
                "Hiệu năng mạnh mẽ với chip MediaTek Dimensity 8300-Ultra - Mang lại hiệu năng tốt cho các tác vụ hàng ngày, từ lướt web, xem video đến chơi game với độ ổn định cao."
              }
              price={"10000"}
              oldPrice={"20000"}
            />
          </Grid2>
          <Grid2 size={2.4}>
            <ProductCard
              reducePrice={12}
              imgUrl={phone02}
              productName={"iPhone 16 Pro 128GB | Chính hãng VN/A"}
              description={
                "Hiệu năng mạnh mẽ với chip MediaTek Dimensity 8300-Ultra - Mang lại hiệu năng tốt cho các tác vụ hàng ngày, từ lướt web, xem video đến chơi game với độ ổn định cao."
              }
              price={"10000"}
            />
          </Grid2>
          <Grid2 size={2.4}>
            <ProductCard
              reducePrice={12}
              imgUrl={phone03}
              productName={"iPhone 16 Pro Max 256GB | Chính hãng VN/A"}
              description={
                "Hiệu năng mạnh mẽ với chip MediaTek Dimensity 8300-Ultra - Mang lại hiệu năng tốt cho các tác vụ hàng ngày, từ lướt web, xem video đến chơi game với độ ổn định cao."
              }
              price={"10000"}
            />
          </Grid2>
          <Grid2 size={2.4}>
            <ProductCard
              reducePrice={12}
              imgUrl={phone01}
              productName={"Samsung Galaxy Z Flip6"}
              description={
                "Hiệu năng mạnh mẽ với chip MediaTek Dimensity 8300-Ultra - Mang lại hiệu năng tốt cho các tác vụ hàng ngày, từ lướt web, xem video đến chơi game với độ ổn định cao."
              }
              price={"10000"}
            />
          </Grid2>
          <Grid2 size={2.4}>
            <ProductCard
              reducePrice={12}
              imgUrl={phone01}
              productName={"Samsung Galaxy Z Flip6"}
              description={
                "Hiệu năng mạnh mẽ với chip MediaTek Dimensity 8300-Ultra - Mang lại hiệu năng tốt cho các tác vụ hàng ngày, từ lướt web, xem video đến chơi game với độ ổn định cao."
              }
              price={"10000"}
            />
          </Grid2>
        </Grid2>
      </ContainerBestSeller>
    </Box>
  );
};

export default BestSeller;
