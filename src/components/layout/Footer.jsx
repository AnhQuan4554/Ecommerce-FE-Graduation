import React from "react";
import { FooterLink, WrapFooter } from "./Layout.styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Divider, Grid2, Typography } from "@mui/material";
const Footer = () => {
  return (
    <WrapFooter>
      <Grid2 container padding={0}>
        <Grid2 size={4.5}>
          <Typography variant="h4" sx={{ fontWeight: "600", mb: "20px" }}>
            Tech Shop
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={3}>
              <TwitterIcon sx={{ width: "40px", height: "40px" }} />
            </Grid2>
            <Grid2 size={3}>
              <InstagramIcon sx={{ width: "40px", height: "40px" }} />
            </Grid2>
            <Grid2 size={3}>
              <FacebookRoundedIcon sx={{ width: "40px", height: "40px" }} />
            </Grid2>
            <Grid2 size={3}>
              <YouTubeIcon sx={{ width: "40px", height: "40px" }} />
            </Grid2>
          </Grid2>
          <Divider />
          <Typography>
            Phân phối sản phẩm cao cấp, được thiết kế để nâng tầm trải nghiệm
            hàng ngày của bạn
          </Typography>
        </Grid2>
        <Grid2 size={2.5}>
          <Grid2 size={12} container spacing={2} columns={1}>
            <Grid2 size={12} sx={{ mb: "30px" }}>
              <Typography fontWeight={500}>MENU</Typography>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Trang chủ</FooterLink>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Sản phẩm</FooterLink>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Về chúng tôi</FooterLink>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Bài viết về sản phẩm</FooterLink>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={2.5}>
          <Grid2 size={12} container spacing={2} columns={1}>
            <Grid2 size={12} sx={{ mb: "30px" }}>
              <Typography fontWeight={500}>Trang tiện ích</Typography>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Mua sắm</FooterLink>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Liên hệ</FooterLink>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Hỗ trợ</FooterLink>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={2.5}>
          <Grid2 size={12} container spacing={2} columns={1}>
            <Grid2 size={12} sx={{ mb: "30px" }}>
              <Typography fontWeight={500}>
                Liên hệ với chúng tôi qua
              </Typography>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Email : quannguyen@gmail.com</FooterLink>
            </Grid2>
            <Grid2 size={12}>
              <FooterLink>Điện thoại : 0568084311</FooterLink>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </WrapFooter>
  );
};

export default Footer;
