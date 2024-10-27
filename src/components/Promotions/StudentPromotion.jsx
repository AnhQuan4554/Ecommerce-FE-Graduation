import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";

import promoStudent01 from "../../assets/promotion/promoStudent01.jpg";
import promoStudent02 from "../../assets/promotion/promoStudent02.jpg";
import promoStudent03 from "../../assets/promotion/promoStudent03.jpg";
import promoStudent04 from "../../assets/promotion/promoStudent04.jpg";
import promoStudent05 from "../../assets/promotion/promoStudent05.jpg";
import promoStudent06 from "../../assets/promotion/promoStudent06.jpg";
import { Box } from "@mui/material";

const PromotionItemStyled = styled("img")(() => ({
  width: "100%",
  objectFit: "cover",
  // margin: "0 10px",
  padding: "0 10px",
  borderRadius: "30px",
}));

const StudentPromotion = () => {
  const arrPromotion = [
    promoStudent01,
    promoStudent02,
    promoStudent03,
    promoStudent04,
    promoStudent05,
    promoStudent06,
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <Box sx={{ margin: "30px 0", padding: "0 50px" }}>
      <Slider {...settings}>
        {arrPromotion.map((item, index) => (
          <PromotionItemStyled key={index} src={item} />
        ))}
      </Slider>
    </Box>
  );
};

export default StudentPromotion;
