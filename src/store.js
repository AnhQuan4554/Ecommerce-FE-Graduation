import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import orderReducer from "./redux/orderSlice";
import cartReducer from "./redux/cartSlice";
import { userApi } from "./service/user";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./service/product";
import { categoryApi } from "./service/category";
import { orderApi } from "./service/order";

export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    cart: cartReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      productApi.middleware,
      categoryApi.middleware,
      orderApi.middleware
    ),
  devTools: true,
});

setupListeners(store.dispatch);
