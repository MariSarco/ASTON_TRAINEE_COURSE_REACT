import { FilmCard } from "../components/film-cards/film-card";
import { useAppSelector } from "../components/hooks/redux-hooks";
import { getFavoriteFilmsSelector } from "../store/slices/favorites/favorites-selectors";

export function FavoritesPage() {
  const favoritesFilms = useAppSelector(getFavoriteFilmsSelector);
  return (
    <div className="grid-tmp">
      {favoritesFilms.length === 0 && <h1>Favorites list is empty</h1>}
      {favoritesFilms.map((film) => {
        return (
          <FilmCard
            key={film.id}
            id={film.id}
            image={film.posterUrl}
            name={film.nameRu}
            title={film.nameRu}
            rating={film.ratingKinopoisk}
            year={film.year}
            isFavorite={true}
          />
        );
      })}
    </div>
  );
}
