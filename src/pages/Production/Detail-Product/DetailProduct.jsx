import React, { useEffect, useState } from "react";
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
import { Box, Grid2, TextField, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonAction from "./ButtonAction";
import {
  useGetProductByIdQuery,
  useGetProductsByBrandMutation,
} from "../../../service/product";
import { formatCurrency } from "../../../utils/formatPrice";
import RelatedBrandProducts from "./RelatedBrandProducts";
import ModalShipping from "../../../components/common/modal-shipping/ModalShipping";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
};

const DetailProduct = () => {
  const { id } = useParams();

  const {
    currentData: productDetailData,
    isLoading,
    refetch,
  } = useGetProductByIdQuery(id);
  const [productPrice, setProductPrice] = useState(
    productDetailData && productDetailData?.price
  );
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleChangeOptions = (price) => {
    setProductPrice(price);
  };
  useEffect(() => {
    setProductPrice(productDetailData?.price);
  }, [productDetailData?.price]);
  return (
    <div>
      <ContainerCustomStyled>
        <ProductNameStyled mt={"20px"} mb={"20px"}>
          {productDetailData?.name}
        </ProductNameStyled>
        <Grid2 container spacing={3}>
          <Grid2 size={7}>
            <WrapProductInforStyled>
              <Slider {...settings}>
                {productDetailData?.image.map((item, index) => (
                  <WrapProductImg key={index}>
                    <ProductImg src={item} />
                  </WrapProductImg>
                ))}
              </Slider>
            </WrapProductInforStyled>
            <AdditionalProductImages container spacing={2} mt={"20px"}>
              {productDetailData?.image.map((item, index) => (
                <Grid2 key={index} size={3}>
                  <AdditionalProductImagesItem src={item} />
                </Grid2>
              ))}
            </AdditionalProductImages>
          </Grid2>
          <Grid2 size={5}>
            <WrapInforSpecificationStyled>
              <PriceList container spacing={2}>
                {productDetailData?.options.map((item, index) => (
                  <Grid2 key={index} size={4}>
                    <PriceItem
                      onClick={() => handleChangeOptions(item?.price)}
                      isHighlighted={item.price == productPrice}
                    >
                      <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{ fontSize: "18px" }}>
                        {formatCurrency(item.price)}
                      </Typography>
                    </PriceItem>
                  </Grid2>
                ))}
              </PriceList>
              <TextField
                sx={{ mb: "20px" }}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                type="number"
                label="Nhập số lượng mua"
              />
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
              {/* Button handle action */}
              <ButtonAction setOpenModal={setOpenModal} />
            </WrapInforSpecificationStyled>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2}>
          <RelatedBrandProducts brand={productDetailData?.brand} />
        </Grid2>
        <ModalShipping
          open={openModal}
          setOpen={setOpenModal}
          totalPay={productPrice * quantity}
          productDetailData={{ ...productDetailData, qty: quantity }}
        />
      </ContainerCustomStyled>
    </div>
  );
};

export default DetailProduct;
