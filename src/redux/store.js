import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { userApi } from "../service/user";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../service/product";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
