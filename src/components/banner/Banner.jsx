import React from "react";
import {
  ButtonBannerStyled,
  ContaiBtnStyled,
  ContainerBanner,
  DesBannerStyled,
  ImgBannerStyled,
  TitleBannerStyled,
} from "./Banner-styled";
import lap1 from "../../assets/homeImg/lap1.jpg";
import lap2 from "../../assets/homeImg/lap2.jpg";
import lap3 from "../../assets/homeImg/lap3.jpg";
import phone1 from "../../assets/homeImg/phone1.jpg";
const Banner = () => {
  return (
    <ContainerBanner>
      <ImgBannerStyled top="20%" left="10%" src={phone1} />
      <ImgBannerStyled top="0%" right="5%" src={lap2} />
      <ImgBannerStyled top="60%" left="10%" src={lap3} />
      <ImgBannerStyled top="60%" right="10%" src={lap1} />
      <TitleBannerStyled variant="h2">
        High-quality tech gadgets & accessories
      </TitleBannerStyled>
      <DesBannerStyled>
        Shop our curated selection of premium products, designed to elevate your
        everyday experiences
      </DesBannerStyled>
      <ContaiBtnStyled>
        <ButtonBannerStyled backgroundColor="rgb(14, 14, 14)" color="#fff">
          Browse products
        </ButtonBannerStyled>

        <ButtonBannerStyled
          backgroundColor="#fff"
          color="black"
          borderColor="black"
        >
          About Us
        </ButtonBannerStyled>
      </ContaiBtnStyled>
    </ContainerBanner>
  );
};

export default Banner;
