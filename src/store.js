import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import { userApi } from "./service/user";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./service/product";
import { categoryApi } from "./service/category";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      productApi.middleware,
      categoryApi.middleware
    ),
  devTools: true,
});

setupListeners(store.dispatch);
