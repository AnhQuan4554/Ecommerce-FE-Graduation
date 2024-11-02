import React from "react";
import { Button, Container, Grid2, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
}));
const Register = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", padding: "30px" }}
    >
      <Grid2 container maxWidth={"800px"} spacing={2}>
        <Grid2 size={12}>
          <TextFieldStyled required label="Nhập họ và tên" />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled required label="Nhập số điện thoại" />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled required label="Nhập email" />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled required label="Ngày sinh" />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled required label="Nhập mật khẩu" />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled required label="Nhập lại mật khẩu" />
        </Grid2>
        <Grid2 size={12}>
          <Button
            sx={{
              background: "rgb(14, 14, 14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              width: "100%",
            }}
          >
            Đăng ký
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Register;
