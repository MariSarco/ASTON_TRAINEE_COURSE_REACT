import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { filmSlice } from "../films-slice";

const getFavoritesSelector = (state: RootState) => state.favorites;
const selectFilmsBlaBla = filmSlice.endpoints.getFilms.select(5);

export const getFavoriteFilmsSelector = createSelector(
  getFavoritesSelector,
  (favorites) => favorites.films
);

export const getFavoriteFilmsIsFetchingSelector = createSelector(
  getFavoritesSelector,
  (favorites) => favorites.isFetching
);

export const getFilmsWithFavoritesSelector = createSelector(
  [selectFilmsBlaBla, getFavoritesSelector],
  (films, favorites) => {
    console.log(films);
    return films.data?.items.map((film) => {
      const isFavorite = favorites.films.some(
        (item) => film.kinopoiskId === item.id
      );
      return { ...film, isFavorite };
    });
  }
);
