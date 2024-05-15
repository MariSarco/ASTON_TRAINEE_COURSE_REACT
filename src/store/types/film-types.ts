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

export interface SearchResultInterface {
  keyword: string;
  pagesCount: number;
  films: SearchFilmInterface[];
  searchFilsCountResult: number;
}

export interface TransformedSearchFilmsResultInterface {
  keyword: string;
  films: SearchFilmInterface[];
}

export interface SearchFilmInterface {
  countries: CountriesType[];
  description: string;
  filmId: number;
  filmLength: string;
  genres: GenresType[];
  nameEn: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingVoteCount: number;
  type: string;
  year: string;
  isFavorite: boolean;
}
