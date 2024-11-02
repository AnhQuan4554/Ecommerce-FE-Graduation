import { Button, Container, Grid2, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
}));

const Login = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", padding: "30px" }}
    >
      <Grid2 container maxWidth={"800px"} spacing={2}>
        <Grid2 size={12}>
          <TextFieldStyled required label="Nhập email" />
        </Grid2>

        <Grid2 size={12}>
          <TextFieldStyled required label="Nhập mật khẩu" />
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
            Đăng nhập
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Login;
