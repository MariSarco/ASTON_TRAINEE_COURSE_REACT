import { Link, useNavigate } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/services/farebase-service";
import { useAppSelector } from "../hooks/redux-hooks";

interface FilmCardProps {
  id: number;
  name: string;
  title: string | null;
  image: string;
  year: number;
  rating: number;
  isFavorite: boolean;
}

export const FilmCard = ({
  id,
  name,
  title,
  image,
  year,
  rating,
  isFavorite,
}: FilmCardProps) => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const handleAddToFavoritesHandle = () => {
    if (user?.email) {
      addToFavorites(
        {
          id: id,
          nameRu: name,
          description: name,
          posterUrl: image,
          year: year,
          ratingKinopoisk: rating,
        },
        user.email
      );
    }
  };

  const handleRemoveFromFavorites = () => {
    if (user?.email) {
      removeFromFavorites(id, user.email);
    }
  };

  return (
    <div className="shadow-lg border rounded-md overflow-hidden p-4 flex flex-col">
      <Link to={`/film/${id}`} className="max-h-90">
        <div className="mb-4">
          <p
            className="font-semibold text-xl line-clamp-1"
            title={`${title}`}
          >{`${title}`}</p>
          <div className="text-muted-foreground ">
            <p className="text-sm">{year}</p>
          </div>
        </div>
        <img
          src={image}
          className="h-72 min-w-30 w-full max-w-56 mx-auto rounded"
          alt={`${title}`}
        />
      </Link>
      <div className="flex gap-1 items-center justify-between text-muted-foreground ">
        {rating}
        {isFavorite ? (
          <button onClick={handleRemoveFromFavorites}>
            <img
              src="public/heart-on-svgrepo-com.svg"
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
              src="public/heart-off-svgrepo-com.svg"
              alt="Favorite heart off"
            />
          </button>
        )}
      </div>
    </div>
  );
};