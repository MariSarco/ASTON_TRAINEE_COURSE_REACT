import { CountriesType, FilmsInterface, GenresType } from "../../types/types";

export interface FilmResponseInterface {
  kinopoiskId: number;
  posterUrl: string;
  genres: GenresType[];
  countries: CountriesType[];
  ratingKinopoisk: number;
  year: number;
  nameRu: string;
  description: string;
}

export interface DataInterface {
  items: FilmsInterface[];
}
