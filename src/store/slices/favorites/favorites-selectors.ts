import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { filmSlice } from "../films-slice";

const getFavoritesSelector = (state: RootState) => state.favorites;
const selectAllFilms = filmSlice.endpoints.getFilms.select(5);

export const getFavoriteFilmsSelector = createSelector(
  getFavoritesSelector,
  (favorites) => favorites.films
);

export const getFavoriteFilmsIsFetchingSelector = createSelector(
  getFavoritesSelector,
  (favorites) => favorites.isFetching
);

export const getFilmsWithFavoritesSelector = createSelector(
  [selectAllFilms, getFavoritesSelector],
  (films, favorites) => {
    return films.data?.items.map((film) => {
      const isFavorite = favorites.films.some(
        (item) => film.kinopoiskId === item.id
      );
      return { ...film, isFavorite };
    });
  }
);

export const getFilmWithFavoritesSelector = createSelector(
  [
    getFavoritesSelector,
    (state, filmId: string) =>
      filmSlice.endpoints.getFilmInfo.select(filmId)(state),
  ],
  (favorites, film) => {
    if (!film.data) {
      return null;
    }
    const isFavorite = favorites.films.some(
      (item) => film.data?.id === item.id
    );
    return { ...film.data, isFavorite };
  }
);
