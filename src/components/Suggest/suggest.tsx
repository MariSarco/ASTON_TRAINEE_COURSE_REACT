import { SuggestType } from "./suggest.props";
import { SuggestItem } from "./suggest-item";

export const Suggest = ({ films, searchText }: SuggestType) => {
  return (
    <div className="absolute overflow-x-hidden h-1/2 w-80 overflow-y-auto">
      {films?.length
        ? films.map((item) => <SuggestItem key={item.filmId} {...item} />)
        : `We haven't any data for "${searchText}"`}
    </div>
  );
};
