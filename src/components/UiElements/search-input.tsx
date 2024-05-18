import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import { useDebounce } from "../hooks/use-debounce";
import { useSearchFilmQuery } from "../../store/slices/films/films-slice";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { addToHistory } from "../../store/services/farebase-service";
import { Suggest } from "../Suggest/suggest";
import { getUser } from "../../store/slices/user/user-selector";

export const SearchInput = () => {
  const user = useAppSelector(getUser);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchText") || ""
  );

  useEffect(() => {
    setSearchTerm(searchParams.get("searchText") || "");
  }, [searchParams]);

  const [isShowSuggest, setIsShowSuggest] = useState(false);

  const navigate = useNavigate();
  const searchText = useDebounce(searchTerm, 500);

  const { data } = useSearchFilmQuery(searchText)!;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ searchText: e.target.value });
  };

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (user?.email) {
      await addToHistory(searchTerm, user.email);
    }
    navigate(`/search?searchText=${searchTerm}`);
  };

  const onFocusHandler = () => setIsShowSuggest(true);

  const onBlurHandler = () => setTimeout(() => setIsShowSuggest(false), 200);

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-nowrap relative">
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          className="bg-transparent text-md w-80 text-accent py-2 px-1 rounded-r-none border border-accent rounded-xl"
          value={searchTerm}
          placeholder="Search"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <button className="bg-accent text-amber-500 rounded-l-none w-10 py-2 px-1 rounded-l-none border border-accent rounded-xl hover:bg-amber-500 hover:text-white ">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      </form>
      {searchText?.trim() && data && isShowSuggest && (
        <Suggest films={data} searchText={searchText} />
      )}
    </div>
  );
};
