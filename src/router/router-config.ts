import { lazily } from "react-lazily";

const { HomePage } = lazily(() => import("../pages/home-page"));
const { SignInPage } = lazily(() => import("../pages/signin-page"));
const { SignUpPage } = lazily(() => import("../pages/signup-page"));
const { FavoritesPage } = lazily(() => import("../pages/favorites-page"));
const { HistoryPage } = lazily(() => import("../pages/history-page"));
const { SearchPage } = lazily(() => import("../pages/search-page"));
const { FilmPage } = lazily(() => import("../pages/film-page"));

export const routesPublic = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/film/:id",
    component: FilmPage,
  },
];

export const routesAuthOnly = [
  {
    path: "/history",
    component: HistoryPage,
    exact: true,
  },
  {
    path: "/favorites",
    component: FavoritesPage,
    exact: true,
  },
];

export const routesNoAuthOnly = [
  {
    path: "/signin",
    component: SignInPage,
    exact: true,
  },
  {
    path: "/signup",
    component: SignUpPage,
    exact: true,
  },
];
