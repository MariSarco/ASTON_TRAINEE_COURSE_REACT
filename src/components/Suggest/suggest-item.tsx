import { useNavigate } from "react-router-dom";
import { SearchFilmInterface } from "../../store/types/film-types";

export const SuggestItem = ({
  filmId,
  posterUrl,
  description,
  nameRu,
  nameEn,
}: SearchFilmInterface) => {
  const navigate = useNavigate();
  const filmName = nameRu || nameEn || description;
  const handleClick = () => navigate(`/film/${filmId}`);

  return (
    <div onClick={handleClick}>
      <div className="flex items-center gap-2 font-medium bg-black bg-opacity-90 cursor-pointer">
        <div className="min-h-16 min-w-12">
          {posterUrl && (
            <img
              className="block h-16 w-12 rounded-md"
              src={posterUrl}
              alt={filmName}
            />
          )}
        </div>
        <div className="whitespace-pre-wrap text-start line-clamp-1">
          {filmName}
        </div>
      </div>
    </div>
  );
};
