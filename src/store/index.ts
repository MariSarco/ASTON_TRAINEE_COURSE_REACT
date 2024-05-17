import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/user-slice";
import { filmSlice } from "./slices/films/films-slice";
import favoritesReducer from "./slices/favorites/favorites-slice";
import { customMiddlewareLogger } from "../components/helpers/logger";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
    [filmSlice.reducerPath]: filmSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmSlice.middleware, customMiddlewareLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
