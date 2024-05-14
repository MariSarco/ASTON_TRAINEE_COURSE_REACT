import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { FilmCard } from "../components/FilmCards/film-card";
import { useSearchFilmQuery } from "../store/slices/films/films-slice";

interface FilmSearchResultsInterface {
  searchTerm: string;
}

export const FilmSearchResults = ({
  searchTerm,
}: FilmSearchResultsInterface) => {
  const { data } = useSearchFilmQuery(searchTerm);

  if (data) {
    return (
      <div className="grid-tmp">
        {data.map((item) => (
          <FilmCard
            key={item.filmId}
            id={item.filmId}
            title={item.nameEn || item.nameRu}
            name={item.nameRu}
            rating={+item.rating || item.ratingVoteCount}
            image={item.posterUrlPreview}
            year={+item.year}
            isFavorite={item.isFavorite}
          />
        ))}
      </div>
    );
  }
};

FilmSearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("searchText"));

  useEffect(() => {
    setSearchTerm(searchParams.get("searchText"));
  }, [searchParams]);

  return (
    <div>
      <FilmSearchResults searchTerm={searchTerm || ""} />
    </div>
  );
};
