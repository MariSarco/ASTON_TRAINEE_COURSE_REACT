import { resetFavorites } from '../../store/slices/favorites/favorites-slice';
import { useAppSelector, useAppDispatch } from "./redux-hooks";
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { getFavoritesFilms } from '../../store/services/favorites-service';
import { getFavoriteFilmsIsFetchingSelector, getFavoriteFilmsSelector } from '../../store/slices/favorites/favorites-selectors';


export function useFavorites() {
  
    const auth = getAuth();
    const user = auth.currentUser;
    const dispatch = useAppDispatch();
    const favoritesFilms = useAppSelector(getFavoriteFilmsSelector);
    const isFetching = useAppSelector(getFavoriteFilmsIsFetchingSelector);
    useAppSelector(state => state.user);
    
    
    useEffect(() => {
        if (user?.email && !isFetching) {
          getFavoritesFilms(user.email);
        } else if (!user?.email && isFetching) {
          dispatch(resetFavorites());
        }
      }, [user?.email, isFetching]);
    
    return {
        favoritesFilms: favoritesFilms
    };
        
}