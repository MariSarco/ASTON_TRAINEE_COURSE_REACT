import { useNavigate } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/services/farebase-service";
import { FilmReadyInterface } from "../../types/types";
import { useAppSelector } from "../hooks/redux-hooks";

export const FilmInfoCard = ({ film }: { film: FilmReadyInterface }) => {
  const {
    nameRu,
    description,
    ratingKinopoisk,
    year,
    id,
    posterUrl,
    isFavorite,
  } = film;
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const handleAddToFavoritesHandle = () => {
    if (user?.email) {
      addToFavorites(film, user.email);
    }
  };

  const handleRemoveFromFavorites = () => {
    if (user?.email) {
      removeFromFavorites(id, user.email);
    }
  };

  return (
    <div className="flex flex-column sm:flex-row gap-6 flex-wrap">
      <div className="flex flex-1 flex-col items-center gap-5 min-w-[300px]">
        <div className="h-[500px] rounded-md overflow-hidden">
          <img
            className="block w-full h-full max-h-[500px]"
            src={posterUrl}
            alt={nameRu}
          />
        </div>
        {isFavorite ? (
          <button onClick={handleRemoveFromFavorites}>
            <img
              src="../public/heart-on-svgrepo-com.svg"
              alt="Favorite heart on"
            />
          </button>
        ) : (
          <button
            onClick={
              user?.email
                ? handleAddToFavoritesHandle
                : () => navigate("/signin")
            }
          >
            <img
              src="../public/heart-off-svgrepo-com.svg"
              alt="Favorite heart off"
            />
          </button>
        )}
      </div>
      <div className="flex flex-col gap-y-8 flex-1 text-accent">
        <h1 className="text-xl font-bold">{nameRu}</h1>
        <p>{description}</p>
        <div>
          <p>
            <span className="text-muted font-semibold">Year:</span>
            {year}
          </p>
          <p>
            <span className="text-muted font-semibold">Raiting:</span>
            {ratingKinopoisk}
          </p>
        </div>
      </div>
    </div>
  );
};
