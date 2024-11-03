import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { userApi } from "../service/user";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
