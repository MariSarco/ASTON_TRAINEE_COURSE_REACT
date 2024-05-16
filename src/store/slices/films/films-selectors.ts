import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { filmSlice } from "./films-slice";

const getFavoritesSelector = (state: RootState) => state.favorites;
const getSearchResultSelector = (state: RootState) => state.film;

export const getSearchResultFilms = createSelector(
  getSearchResultSelector,
  (searchData) => searchData
);

export const getSearchFilmsWithFavoritesSelector = createSelector(
  [
    getFavoritesSelector,
    (state, keyword: string) =>
      filmSlice.endpoints.searchFilm.select(keyword)(state),
  ],
  (favorites, films) => {
    return films.data?.map((film) => {
      const isFavorite = favorites.films.some(
        (item) => film.filmId === item.id
      );
      return { ...film, isFavorite };
    });
  }
);
