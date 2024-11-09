import { Button, Container, Grid2, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../service/user";
import { setCredentials } from "../../redux/user/userSlice";
import { toast } from "react-toastify";

const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
}));
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data.error || err.error);
    }
  };
  return (
    <Container
      onSubmit={submitHandler}
      sx={{ display: "flex", justifyContent: "center", padding: "30px" }}
    >
      <Grid2 container maxWidth={"800px"} spacing={2}>
        <Grid2 size={12}>
          <TextFieldStyled
            onChange={(e) => setEmail(e.target.value)}
            required
            label="Nhập email"
          />
        </Grid2>

        <Grid2 size={12}>
          <TextFieldStyled
            required
            label="Nhập mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid2>

        <Grid2 size={12}>
          <Button
            onClick={submitHandler}
            disabled={isLoading}
            type="submit"
            sx={{
              background: "rgb(14, 14, 14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              width: "100%",
            }}
          >
            {isLoading ? "Đăng nhập..." : " Đăng nhập"}
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Login;
