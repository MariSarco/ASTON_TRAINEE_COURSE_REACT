import { createSlice } from "@reduxjs/toolkit";
import { FavoritesState } from "../../types/favorites-type";

const initialState: FavoritesState = {
  films: [],
  isFetching: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.films = action.payload;
      state.isFetching = true;
    },
    resetFavorites: (state) => {
      state.films = [];
      state.isFetching = false;
    },
  },
});

export const { setFavorites, resetFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;