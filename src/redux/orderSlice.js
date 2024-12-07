import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderInfo: {
    user: null,
    orderItems: [],
    shippingAddress: {
      address: "",
      city: "",
      phone: "",
    },
    paymentMethod: "Cash",
    itemsPrice: 0.0,
    taxPrice: 0.0,
    shippingPrice: 0.0,
    totalPrice: 0.0,
    isPaid: false,
    paidAt: null,
    isDelivered: false,
    deliveredAt: null,
  },
  loading: false,
  error: null,
  success: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.orderInfo = action.payload;
    },
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
