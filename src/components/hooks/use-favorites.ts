import { resetFavorites } from "../../store/slices/favorites/favorites-slice";
import { useAppSelector, useAppDispatch } from "./redux-hooks";
import { useEffect } from "react";
import { getFavoritesFilms } from "../../store/services/farebase-service";
import { getFavoriteFilmsIsFetchingSelector } from "../../store/slices/favorites/favorites-selectors";
import { getUser } from "../../store/slices/user/user-selector";

export function useFavorites() {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(getFavoriteFilmsIsFetchingSelector);
  const user = useAppSelector(getUser);

  useEffect(() => {
    if (user?.email && !isFetching) {
      getFavoritesFilms(user.email);
    } else if (!user?.email && isFetching) {
      dispatch(resetFavorites());
    }
  }, [user?.email, isFetching]);

  return { isFetching };
}
