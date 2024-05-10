import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./slices/user-slice";
import { filmSlice } from "./slices/films-slice";
import favoritesReducer from "./slices/favorites/favorites-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
    [filmSlice.reducerPath]: filmSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


