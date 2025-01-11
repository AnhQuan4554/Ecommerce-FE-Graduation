import { useState } from "react";
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
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";
import { useRegisterMutation } from "../../service/user";
import { forMatDate } from "../../utils/formatDate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
}));

const Register = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log("password+++", password);
  const [register, { isLoading }] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword2 = (event) => {
    event.preventDefault();
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await register({
        username,
        email,
        phone,
        dateOfBirth: forMatDate(dateOfBirth),
        password,
        confirmPassword,
      }).unwrap();
      toast.success("Đăng kí thành công", { autoClose: 1000 });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      toast.error(err?.data.error || err.error);
    }
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", padding: "30px" }}
    >
      <Grid2 container maxWidth={"600px"} spacing={2}>
        <Grid2 size={12}>
          <Typography textAlign={"center"} variant="h4">
            Mời nhập thông tin đăng ký
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            label="Nhập họ và tên"
          />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            label="Nhập số điện thoại"
          />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            label="Nhập email"
          />
        </Grid2>
        <Grid2 size={12}>
          <DatePicker
            onChange={(newValue) => {
              setDateOfBirth(newValue);
            }}
            sx={{ width: "100%" }}
            label="Ngày sinh"
          />
        </Grid2>

        <Grid2 size={12}>
          <FormControl
            sx={{ m: 1, width: "100%", margin: "0" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined1">Nhập mật khẩu</InputLabel>
            <OutlinedInput
              id="outlined1"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <FormControl
            sx={{ m: 1, width: "100%", margin: "0" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined2">Nhập lại mật khẩu</InputLabel>
            <OutlinedInput
              id="outlined2"
              type={showPassword2 ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword2
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    onMouseUp={handleMouseUpPassword2}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
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
            sx={{
              background: "rgb(14, 14, 14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              width: "100%",
            }}
          >
            {isLoading ? "Đăng ký..." : " Đăng ký"}
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Register;
