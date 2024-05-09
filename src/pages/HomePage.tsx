import { useGetFilmsQuery } from "../store/slices/films-slice";
import { FilmCard } from "../components/FilmCard/FilmCard";
import { FilmsInterface } from "../types/types";


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
          />
        ))}
    </>
        
  );
};

const HomePage = () => {
    const { data, isLoading, error } = useGetFilmsQuery(5);

  if (data) {
    return (
        <div className="grid-tmp">
            {error && <>{error}</>}
            {!isLoading && <FilmList data={data.items} />}
            {isLoading && <>Loading...</>}
        </div>
    );
  }
}
export {HomePage}