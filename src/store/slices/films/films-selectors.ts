import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

export const getSearchResultSelector = (state: RootState) => state.film;

export const getSearchResultFilms = createSelector(
  getSearchResultSelector,
  (searchData) => searchData
);
