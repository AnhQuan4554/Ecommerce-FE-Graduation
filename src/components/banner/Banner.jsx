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
        Đẳng cấp công nghệ, nâng tầm trải nghiệm
      </TitleBannerStyled>
      <DesBannerStyled>
        Khám phá bộ sưu tập sản phẩm cao cấp, được thiết kế để nâng tầm trải
        nghiệm hàng ngày của bạn.
      </DesBannerStyled>
      <ContaiBtnStyled>
        <ButtonBannerStyled backgroundColor="rgb(14, 14, 14)" color="#fff">
          Khám phá sản phẩm
        </ButtonBannerStyled>

        <ButtonBannerStyled
          backgroundColor="#fff"
          color="black"
          borderColor="black"
        >
          Về chúng tôi
        </ButtonBannerStyled>
      </ContaiBtnStyled>
    </ContainerBanner>
  );
};

export default Banner;
