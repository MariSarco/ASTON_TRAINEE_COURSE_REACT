import { FilmInterface } from "../../types/types";

export type FavoritesState = {
  films: FilmInterface[];
  isFetching: boolean;
};
