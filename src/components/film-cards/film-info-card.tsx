import { FilmReadyInterface } from "../../types/types";
import { LikeButton } from "../UiElements/like-button";

export const FilmInfoCard = ({ film }: { film: FilmReadyInterface }) => {
  const { nameRu, description, ratingKinopoisk, year, posterUrl, isFavorite } =
    film;

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
        <LikeButton isFavorite={isFavorite} film={film} />
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
