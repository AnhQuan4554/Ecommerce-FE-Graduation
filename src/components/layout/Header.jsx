import React from "react";

import logo from "../../assets/logo.jpg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  ContainerCustomStyled,
  LogoStyled,
  SearchStyled,
  WrapToolTipHeaderStyled,
} from "./Layout.styled";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../service/user";
import { logout } from "../../redux/userSlice";

const pages = ["Đơn hàng", "Giỏ hàng", "Về chúng tôi", "Hỗ trợ", "Liên hệ"];
const pagesLink = {
  "Đơn hàng": "order",
  "Giỏ hàng": "cart",
  "Về chúng tôi": "about-us",
  "Hỗ trợ": "support",
  "Liên hệ": "contact",
};

const convertLink = {
  "Tài khoản": "profile",
  "Thống kê cửa hàng": "dashboard",
  "Sản phẩm": "products",
  "Phân loại": "category",
  "Đăng xuất": "logout",
};

const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [logoutApiCall] = useLogoutMutation();

  const settings = React.useMemo(() => {
    return userInfo?.isAdmin
      ? ["Tài khoản", "Thống kê cửa hàng", "Sản phẩm", "Phân loại", "Đăng xuất"]
      : ["Tài khoản", "Đăng xuất"];
  }, [userInfo?.isAdmin]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppBar position="static">
      <ContainerCustomStyled maxWidth={false} disableGutters={true}>
        <Toolbar disableGutters>
          <Link to={"/"}>
            <LogoStyled
              src={logo}
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </Link>
          <WrapToolTipHeaderStyled
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </WrapToolTipHeaderStyled>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <LogoStyled sx={{ display: { xs: "flex", md: "none" } }} src={logo} />
          <WrapToolTipHeaderStyled
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: " rgb(43, 43, 48)",
                  display: "block",
                  margin: "0 8px",
                  "& a": {
                    textDecoration: "none",
                    color: "black",
                  },
                }}
              >
                <Link
                  to={pagesLink[page]}
                  sx={{
                    backgroundColor: "#ea4750",
                    padding: "10px",
                    marginRight: "10px",
                  }}
                >
                  {page}
                </Link>
              </Button>
            ))}
            <SearchStyled sx={{ display: { xs: "none", md: "flex" } }}>
              <input placeholder="Search" type="text" />
              <SearchIcon sx={{ color: "black" }} />
            </SearchStyled>
          </WrapToolTipHeaderStyled>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account information">
              <Box
                sx={{
                  display: "flex",
                  minWidth: "300px",
                  justifyContent: userInfo ? "flex-end" : "space-between",
                  alignItems: "center",
                  "& a": {
                    textDecoration: "none",
                    textAlign: "center",
                    boxSizing: "border-box",
                  },
                }}
              >
                {userInfo ? (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                ) : (
                  <>
                    <Link
                      to={"/login"}
                      sx={{
                        backgroundColor: "#ea4750",
                        padding: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <AccountCircleIcon />
                      <Typography sx={{ textDecoration: "none" }}>
                        Đăng nhập
                      </Typography>
                    </Link>
                    <Link
                      to={"/register"}
                      sx={{
                        backgroundColor: "#ea4750",
                        padding: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <AccountCircleIcon />
                      <Typography>Đăng ký</Typography>
                    </Link>
                  </>
                )}
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* authory update code handlle for setting */}
              {settings.map((setting) => (
                <MenuItem
                  sx={{ padding: "6px" }}
                  key={setting}
                  onClick={handleCloseUserMenu}
                >
                  <Link
                    onClick={convertLink[setting] == "logout" && logoutHandler}
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "black",
                      fontSize: "20px",
                      width: "100%",
                      textAlignLast: "left",
                    }}
                    to={`/admin/${convertLink[setting]}`}
                  >
                    {setting}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </ContainerCustomStyled>
    </AppBar>
  );
};

export default Header;
