import { useState } from "react";
import { Button, Container, Grid2, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";
import { useRegisterMutation } from "../../service/user";
import { forMatDate } from "../../utils/formatDate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

  const [register, { isLoading }] = useRegisterMutation();

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
      toast.success("Đăng kí thành công");
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
      <Grid2 container maxWidth={"800px"} spacing={2}>
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
              console.log("new value", newValue);
              setDateOfBirth(newValue);
            }}
            sx={{ width: "100%" }}
            label="Ngày sinh"
          />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            label="Nhập mật khẩu"
          />
        </Grid2>
        <Grid2 size={12}>
          <TextFieldStyled
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            label="Nhập lại mật khẩu"
          />
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
