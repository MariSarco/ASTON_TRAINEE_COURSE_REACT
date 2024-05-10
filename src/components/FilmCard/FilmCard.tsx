import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { addToFavorites, removeFromFavorites } from "../../store/services/favorites-service";
import { getAuth } from 'firebase/auth';
import { useFavorites } from "../hooks/use-favorites";



interface FilmCardProps {
    id: number;
    name: string;
    title: string | null;
    image: string;
    year: number;
    rating: number;
}



export const FilmCard = ({
    id,
    name,
    title,
    image,
    year,
    rating,
}: FilmCardProps) => {

    const auth = getAuth();
    const user = auth.currentUser;
    const { favoritesFilms } = useFavorites()
    const navigate = useNavigate();

    const isFavorite = useMemo<boolean>(
        () => Boolean(favoritesFilms.find((film) => film.id === id)),
        [favoritesFilms, id]
    );

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
        <div data-testid="media-card" className="shadow-lg border rounded-md overflow-hidden p-4 flex flex-col">
            <Link to={`/film/${id}`} className="max-h-90">
            <div className="mb-4">
                <p className="font-semibold text-xl line-clamp-1" title={`${title}`}>{`${title}`}</p>
                <div className="text-muted-foreground ">
                    <p className="text-sm">{year}</p>
                </div>
            </div>
                <img src={image} className="h-72 min-w-30 w-full max-w-56 mx-auto rounded" alt={`${title}`} />
            </Link>
            <div className="flex gap-1 items-center justify-between text-muted-foreground ">
                {rating}
                {isFavorite ? (
                <button
                    onClick={handleRemoveFromFavorites}
                >
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
