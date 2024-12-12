import { useGetProfileQuery, useUpdateProfileMutation } from "../../service/user";
import {
  TextField,
  Box,
  CircularProgress,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userId = useSelector((state) => state.user.userInfo._id);
  const { currentData, isLoading, isError } = useGetProfileQuery(userId);
  const [updateProfile] = useUpdateProfileMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentData) {
      setFormData({
        username: currentData.username || "",
        email: currentData.email || "",
        phone: currentData.phone || "",
        dateOfBirth: currentData.dateOfBirth || "",
      });
    }
  }, [currentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isDataChanged = () => {
    return (
      formData.username !== currentData.username ||
      formData.email !== currentData.email ||
      formData.phone !== currentData.phone ||
      formData.dateOfBirth !== currentData.dateOfBirth
    );
  };

  const handleModalClose = () => setIsModalOpen(false);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile({ userId, data: formData }).unwrap();
      console.log("Cập nhật thành công");
      setIsEditing(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Cập nhật thất bại", error);
    }
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !currentData) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h6" color="error">
          Không thể tải dữ liệu hồ sơ người dùng.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{
      pt: 6,
      pl: { xs: 8, sm: 16, lg: 40, xl: 60 }, // Padding trái thay đổi theo màn hình
      pr: { xs: 8, sm: 16, lg: 40, xl: 60 }, // Padding phải thay đổi theo màn hình
    }}>
      <Typography variant="h4" mb={4} textAlign="center">
        {isEditing ? "CẬP NHẬT THÔNG TIN CÁ NHÂN" : "THÔNG TIN CÁ NHÂN"}
      </Typography>
      <TextField
        label="Tên người dùng"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
        slotProps={{
          input: {
            readOnly: !isEditing,
          },
        }}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        slotProps={{
          input: {
            readOnly: !isEditing,
          },
        }}
      />
      <TextField
        label="Số điện thoại"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
        slotProps={{
          input: {
            readOnly: !isEditing,
          },
        }}
      />
      <TextField
        label="Ngày sinh"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        fullWidth
        margin="normal"
        slotProps={{
          input: {
            readOnly: !isEditing,
          },
        }}
      />
      <Box display="flex" gap={2} mt={2}>
        {isEditing ? (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsModalOpen(true)}
              disabled={!isDataChanged()}
            >
              Lưu
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                setFormData({
                  username: currentData.username || "",
                  email: currentData.email || "",
                  phone: currentData.phone || "",
                  dateOfBirth: currentData.dateOfBirth || "",
                });
                setIsEditing(false);
              }}
            >
              Hủy
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={() => setIsEditing(true)}>
            Sửa thông tin
          </Button>
        )}
      </Box>
      {/* Modal xác nhận */}
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" mb={2}>
              Xác nhận cập nhật thông tin
            </Typography>
            <Typography mb={3}>
              Bạn có chắc muốn lưu các thay đổi cho thông tin cá nhân của mình?
            </Typography>
            <Box display="flex" gap={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateProfile}
              >
                Đồng ý
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleModalClose}>
                Hủy
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Profile;