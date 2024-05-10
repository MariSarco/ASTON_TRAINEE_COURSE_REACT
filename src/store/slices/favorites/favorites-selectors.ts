import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

const getFavoritesSelector = (state: RootState) => state.favorites;

export const getFavoriteFilmsSelector = createSelector(
  getFavoritesSelector,
  (favorites) => favorites.films
);

export const getFavoriteFilmsIsFetchingSelector = createSelector(
  getFavoritesSelector,
  (favorites) => favorites.isFetching
);
