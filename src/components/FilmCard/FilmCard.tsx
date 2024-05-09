import { Link } from "react-router-dom";


interface FilmCardProps {
    id: number;
    title: string | null;
    image: string;
    year: number;
    rating: number;
    name: string;
}
  


export const FilmCard = ({
    id,
    image,
    rating,
    title,
    year,
}: FilmCardProps) => {


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
        <div className="flex gap-1 items-center text-muted-foreground ">
            {rating}&nbsp;
            <img
            src="public/star-sharp-svgrepo-com.svg"
            alt="Rating Star"
            />
        </div>
    </div>    
  );
};
