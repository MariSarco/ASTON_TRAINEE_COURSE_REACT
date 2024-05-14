import { resetFavorites } from "../../store/slices/favorites/favorites-slice";
import { useAppSelector, useAppDispatch } from "./redux-hooks";
import { useEffect } from "react";
import { getFavoritesFilms } from "../../store/services/farebase-service";
import { getFavoriteFilmsIsFetchingSelector } from "../../store/slices/favorites/favorites-selectors";

export function useFavorites() {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(getFavoriteFilmsIsFetchingSelector);
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user?.email && !isFetching) {
      getFavoritesFilms(user.email);
    } else if (!user?.email && isFetching) {
      dispatch(resetFavorites());
    }
  }, [user?.email, isFetching]);
}
