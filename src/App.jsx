import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  console.log(import.meta.env.VITE_TEST_ENV);
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
