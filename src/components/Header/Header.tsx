import { HeaderLogo } from "./header-logo";
import { NavLink } from "react-router-dom";
import { useAuth, signOut } from "../hooks/use-auth";
import { useGetFilmsQuery } from "../../store/slices/films/films-slice";
import { useFavorites } from "../hooks/use-favorites";
import { SearchInput } from "../search-input";
import { ThemeToggle } from "../theme/theme-toggle";

export function Header() {
  const { isAuth } = useAuth();
  useFavorites();
  useGetFilmsQuery(5);

  return (
    <header>
      <div className="container py-3 mx-auto px-4 min-h-16 flex flex-col sm:flex-row gap-4 justify-between items-center text-accent">
        <div className="flex items-center gap-x-2">
          <NavLink to="/">
            <HeaderLogo />
          </NavLink>
          <ThemeToggle />
        </div>
        <SearchInput />

        {isAuth ? (
          <nav className="flex items-center gap-2">
            <NavLink
              to="/favorites"
              className="bg-transparent hover:bg-white font-semibold hover:text-amber-500 py-1 px-2 border border-accent  rounded"
            >
              Favorites
            </NavLink>
            <NavLink
              to="/history"
              className="bg-transparent hover:bg-white font-semibold hover:text-amber-500 py-1 px-2 border border-accent  rounded"
            >
              History
            </NavLink>
            <NavLink
              to="/"
              onClick={() => {
                signOut();
              }}
              className="bg-transparent hover:bg-white font-semibold hover:text-amber-500 py-1 px-2 border border-accent rounded"
            >
              SignOut
            </NavLink>
          </nav>
        ) : (
          <nav className="flex items-center gap-2">
            <NavLink
              to="/signin"
              className="bg-transparent hover:bg-white text-accent font-semibold hover:text-amber-500 py-1 px-2 border border-accent rounded"
            >
              LogIn
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-amber-500 border border-amber-500 hover:bg-amber-600 text-white font-bold py-1 px-2 rounded"
            >
              SignUp
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
