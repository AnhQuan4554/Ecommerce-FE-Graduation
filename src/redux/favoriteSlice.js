import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const productId = action.payload;
      const existItem = state.favorite.find((id) => id === productId);
      if (existItem) {
        state.favorite = state.favorite.filter((id) => id !== existItem);
        toast.success("Bạn đã xóa sản phẩm vào sản phẩm yêu thích ", {
          autoClose: 1000,
        });
      } else {
        state.favorite = [...state.favorite, productId];
        toast.success("Bạn đã thêm sản phẩm vào sản phẩm yêu thích ", {
          autoClose: 1000,
        });
      }
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
  },
});

export const { addToFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
