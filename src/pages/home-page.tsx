import { FilmCard } from "../components/FilmCard/FilmCard";
import { FilmsInterface } from "../types/types";
import { useAppSelector } from "../components/hooks/redux-hooks";
import { getFilmsWithFavoritesSelector } from "../store/slices/favorites/favorites-selectors";

export interface FilmListPropsType {
  data: FilmsInterface[];
}

const FilmList = ({ data }: FilmListPropsType) => {
  return (
    <>
      {data.map((item) => (
        <FilmCard
          key={item.kinopoiskId}
          id={item.kinopoiskId}
          title={item.nameOriginal || item.nameRu}
          name={item.nameRu}
          rating={item.ratingImdb || item.ratingKinopoisk}
          image={item.posterUrlPreview}
          year={item.year}
          isFavorite={item.isFavorite}
        />
      ))}
    </>
  );
};

const HomePage = () => {
  const films = useAppSelector(getFilmsWithFavoritesSelector);

  if (!films) {
    return "Loading";
  }
  return (
    <div className="grid-tmp">
      <FilmList data={films} />
    </div>
  );
};
export { HomePage };
