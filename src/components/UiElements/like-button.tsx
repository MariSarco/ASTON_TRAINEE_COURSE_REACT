import { useNavigate } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/services/farebase-service";
import { FilmReadyInterface } from "../../types/types";
import { useAppSelector } from "../hooks/redux-hooks";
interface LikeButtonProps {
  isFavorite: boolean;
  film: FilmReadyInterface;
}
export const LikeButton = ({ isFavorite, film }: LikeButtonProps) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const handleAddToFavoritesHandle = () => {
    if (user?.email) {
      addToFavorites(film, user.email);
    }
  };

  const handleRemoveFromFavorites = () => {
    if (user?.email) {
      removeFromFavorites(film.id, user.email);
    }
  };

  return (
    <>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites}>
          <img src="/heart-on-svgrepo-com.svg" alt="Favorite heart on" />
        </button>
      ) : (
        <button
          onClick={
            user?.email ? handleAddToFavoritesHandle : () => navigate("/signin")
          }
        >
          <img src="/heart-off-svgrepo-com.svg" alt="Favorite heart off" />
        </button>
      )}
    </>
  );
};
