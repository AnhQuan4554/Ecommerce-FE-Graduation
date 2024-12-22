import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile/Profile";
import DetailProduct from "./pages/Production/Detail-Product/DetailProduct";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import AdminProductList from "./pages/Production/admin-product/AdminProductList";
import AdminCategory from "./pages/Production/admin-category/AdminCategory";
import Payment from "./pages/Payment/Payment";
import Order from "./pages/ProductBuy/Order";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/order" element={<Order />} />
      <Route path="/product-detail/:id" element={<DetailProduct />} />
      {/* admin */}
      <Route path="/admin/products" element={<AdminProductList />}>
        <Route path="detail/:id" element={<DetailProduct />} />
      </Route>
      <Route path="/admin/category" element={<AdminCategory />}>
        <Route path="detail/:id" element={<DetailProduct />} />
      </Route>
      <Route path="/admin/profile" element={<Profile />}>
        {/* <Route path="detail/:id" element={<DetailProduct />} /> */}
      </Route>
    </Route>
  )
);
