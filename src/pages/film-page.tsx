import { useParams } from "react-router-dom";
import { ParamsFilmType } from "../types/types";
import { useGetFilmInfoQuery } from "../store/slices/films/films-slice";
import { useAppSelector } from "../components/hooks/redux-hooks";
import { getFilmWithFavoritesSelector } from "../store/slices/favorites/favorites-selectors";
import { FilmInfoCard } from "../components/film-cards/film-info-card";

export const FilmPage = () => {
  const params = useParams<ParamsFilmType>();
  const id = params.id!;
  useGetFilmInfoQuery(id);
  const data = useAppSelector((state) =>
    getFilmWithFavoritesSelector(state, id)
  );

  return (
    data && (
      <div>
        <FilmInfoCard film={data} />
      </div>
    )
  );
};
