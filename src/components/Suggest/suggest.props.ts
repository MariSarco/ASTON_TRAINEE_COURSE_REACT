import { SearchFilmInterface } from "../../store/types/film-types";

export type SuggestType = {
  films: SearchFilmInterface[];
  searchText: string;
};
