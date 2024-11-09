import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Layout from "./components/layout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Layout>
        <Outlet />
        <ToastContainer />
      </Layout>
    </LocalizationProvider>
  );
}

export default App;
