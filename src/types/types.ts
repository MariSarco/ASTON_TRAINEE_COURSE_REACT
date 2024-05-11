export type CountriesType = {
  country: string;
};

export type GenresType = {
  genre: string;
};

export interface FilmsInterface {
  countries: CountriesType[];
  genres: GenresType[];
  imdbId: string;
  kinopoiskId: number;
  nameEn: string | null;
  nameOriginal: string | null;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  type: string;
  year: number;
  isFavorite: boolean;
}

export interface FilmInterface {
  id: number;
  posterUrl: string;
  description: string;
  nameRu: string;
  ratingKinopoisk: number;
  year: number;
}

export interface FilmInterfaceFromApi {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: CountriesType[];
  genres: GenresType[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface FilmInfoPropsInterface {
  genres: GenresType[];
  countries: CountriesType[];
  posterUrl: string;
}

export interface DataBaseInterface {
  id: number;
  posterUrl: string;
  description: string;
  nameRu: string;
  ratingKinopoisk: number;
  year: number;
}

export interface LocalInterface extends DataBaseInterface {
  filmId: string;
}

export type ParamsFilmType = {
  id: string;
};
