import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderInfo: {
    user: null, // ID người dùng liên kết với đơn hàng
    orderItems: [], // Danh sách các sản phẩm trong đơn hàng
    shippingAddress: {
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    paymentMethod: "", // Phương thức thanh toán
    itemsPrice: 0.0,
    taxPrice: 0.0,
    shippingPrice: 0.0,
    totalPrice: 0.0,
    isPaid: false,
    paidAt: null, // Thời gian thanh toán
    isDelivered: false,
    deliveredAt: null, // Thời gian giao hàng
  },
  loading: false, // Trạng thái đang tải
  error: null, // Quản lý lỗi nếu có
  success: false, // Trạng thái thành công
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.orderInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
