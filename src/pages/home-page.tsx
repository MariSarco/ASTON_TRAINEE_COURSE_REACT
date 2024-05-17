import { FilmCard } from "../components/film-cards/film-card";
import { FilmsInterface } from "../types/types";
import { useAppSelector } from "../components/hooks/redux-hooks";
import { getFilmsWithFavoritesSelector } from "../store/slices/favorites/favorites-selectors";
import { useFavorites } from "../components/hooks/use-favorites";
import { useAuth } from "../components/hooks/use-auth";
import PropTypes from "prop-types";
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

FilmList.propTypes = {
  data: PropTypes.array.isRequired,
};

const HomePage = () => {
  const films = useAppSelector(getFilmsWithFavoritesSelector);
  const { isAuth } = useAuth();
  const { isFetching } = useFavorites();

  if (!films || (!isFetching && isAuth)) {
    return <span className="text-accent">Loading films...</span>;
  }
  return (
    <div className="grid-tmp">
      <FilmList data={films} />
    </div>
  );
};
export { HomePage };
