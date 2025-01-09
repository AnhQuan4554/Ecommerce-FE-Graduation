import {
  Button,
  Container,
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../service/user";
import { setCredentials } from "../../redux/userSlice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";

const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
}));
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
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
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "30px",
        minHeight: "300px",
      }}
    >
      <Grid2 container maxWidth={"600px"} spacing={2}>
        <Grid2 size={12}>
          <Typography textAlign={"center"} variant="h4">
            Mời nhập thông tin đăng nhập
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled
            onChange={(e) => setEmail(e.target.value)}
            required
            label="Nhập email"
          />
        </Grid2>

        <Grid2 size={12}>
          <FormControl
            sx={{ m: 1, width: "100%", margin: "0" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Nhập mật khẩu
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
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
