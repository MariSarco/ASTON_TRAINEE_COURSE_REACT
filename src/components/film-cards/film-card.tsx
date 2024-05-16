import { Link } from "react-router-dom";
import { LikeButton } from "../UiElements/like-button";

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
  const film = {
    id: id,
    nameRu: name,
    description: name,
    posterUrl: image,
    year: year,
    ratingKinopoisk: rating,
    isFavorite: isFavorite,
  };

  return (
    <div className="shadow-lg border rounded-md overflow-hidden p-4 flex flex-col">
      <Link to={`/film/${id}`} className="max-h-90">
        <div className="mb-4">
          <p
            className="font-semibold text-xl line-clamp-1 text-accent"
            title={`${title}`}
          >{`${title}`}</p>
          <div className="text-muted ">
            <p className="text-sm">{year}</p>
          </div>
        </div>
        <img
          src={image}
          className="h-72 min-w-30 w-full max-w-56 mx-auto rounded"
          alt={`${title}`}
        />
      </Link>
      <div className="flex gap-1 items-center justify-between text-muted ">
        {rating}
        <LikeButton isFavorite={isFavorite} film={film} />
      </div>
    </div>
  );
};
