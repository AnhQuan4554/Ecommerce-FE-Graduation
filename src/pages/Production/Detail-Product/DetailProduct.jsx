import React from "react";
import { useParams } from "react-router-dom";
import {
  AdditionalProductImages,
  AdditionalProductImagesItem,
  ContainerCustomStyled,
  NumberOrder,
  PriceItem,
  PriceList,
  ProductImg,
  ProductNameStyled,
  PromotionHeaderStyled,
  TypographyContentPromo,
  WrapInforSpecificationStyled,
  WrapProductImg,
  WrapProductInforStyled,
  WrapPromotion,
  WrapPromotionContent,
} from "./DetailProduct.styled";
import { Box, Grid2, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgDetail01 from "../../../assets/detail/imgDetail01.jpg";
import imgDetail02 from "../../../assets/detail/imgDetail02.jpg";
import imgDetail03 from "../../../assets/detail/imgDetail03.jpg";
import imgDetail04 from "../../../assets/detail/imgDetail04.jpg";
import ButtonAction from "./ButtonAction";

const DetailProduct = () => {
  const { id } = useParams();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
  };
  const priceItems = [
    { size: "12GB 1TB", price: "52.990.000 đ" },
    { size: "8GB 512GB", price: "42.990.000 đ" },
    { size: "6GB 256GB", price: "32.990.000 đ" },
  ];

  const arrImg = [imgDetail01, imgDetail02, imgDetail03, imgDetail04];
  return (
    <div>
      <ContainerCustomStyled>
        <ProductNameStyled mt={"20px"} mb={"20px"}>
          Samsung Galaxy Z Fold6 12GB 256GB
        </ProductNameStyled>
        <Grid2 container spacing={3}>
          <Grid2 size={7}>
            <WrapProductInforStyled>
              <Slider {...settings}>
                {arrImg.map((item, index) => (
                  <WrapProductImg key={index}>
                    <ProductImg src={item} />
                  </WrapProductImg>
                ))}
              </Slider>
            </WrapProductInforStyled>
            <AdditionalProductImages container spacing={2} mt={"20px"}>
              {arrImg.map((item, index) => (
                <Grid2 key={index} size={3}>
                  <AdditionalProductImagesItem src={item} />
                </Grid2>
              ))}
            </AdditionalProductImages>
          </Grid2>
          <Grid2 size={5}>
            <WrapInforSpecificationStyled>
              <PriceList container spacing={2}>
                {priceItems.map((item, index) => (
                  <Grid2 key={index} size={4}>
                    <PriceItem>
                      <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                        {item.size}
                      </Typography>
                      <Typography sx={{ fontSize: "18px" }}>
                        {item.price}
                      </Typography>
                    </PriceItem>
                  </Grid2>
                ))}
              </PriceList>
              <WrapPromotion>
                <PromotionHeaderStyled>
                  <Box sx={{ width: "30px", height: "30px" }}>
                    <svg
                      style={{ width: "100%", height: "100%" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48V48zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z"></path>
                    </svg>
                  </Box>
                  <Typography sx={{ fontWeight: "600", marginLeft: "10px" }}>
                    Khuyến mãi
                  </Typography>
                </PromotionHeaderStyled>
                <WrapPromotionContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <NumberOrder>1</NumberOrder>
                    <TypographyContentPromo>
                      Tặng ngay Đồng hồ Samsung Watch FE 40mm trị giá 4.990.000đ
                      (Không lấy quà hoàn 2.2 triệu)
                    </TypographyContentPromo>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <NumberOrder>2</NumberOrder>
                    <TypographyContentPromo>
                      Quyền lợi bảo hành rơi vỡ rơi nước 12 tháng tại CellphoneS
                    </TypographyContentPromo>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <NumberOrder>3</NumberOrder>
                    <TypographyContentPromo>
                      Giảm ngay 200K khi mua Samsung Fit 3 (không áp dụng cùng
                      giảm giá qua galaxy gift, xem chi tiết sản phẩm và điều
                      kiện áp dụng tại đây)
                    </TypographyContentPromo>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <NumberOrder>4</NumberOrder>
                    <TypographyContentPromo>
                      Trả góp 0% đến 12 tháng, 0đ trả trước qua Samsung Finance+
                    </TypographyContentPromo>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <NumberOrder>5</NumberOrder>
                    <TypographyContentPromo>
                      Tặng ngay Đồng hồ Samsung Watch FE 40mm trị giá 4.990.000đ
                      (Không lấy quà hoàn 2.2 triệu)
                    </TypographyContentPromo>
                  </Box>
                </WrapPromotionContent>
              </WrapPromotion>
              <ButtonAction />
            </WrapInforSpecificationStyled>
          </Grid2>
        </Grid2>
      </ContainerCustomStyled>
    </div>
  );
};

export default DetailProduct;
