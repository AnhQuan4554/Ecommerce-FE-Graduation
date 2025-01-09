import { createSlice } from "@reduxjs/toolkit";

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
      } else {
        state.favorite = [...state.favorite, productId];
      }
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
  },
});

export const { addToFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
