import { HeaderLogo } from "./HeaderLogo";
import { NavLink } from "react-router-dom";
import { useAuth, signOut } from "../hooks/use-auth";
import { useGetFilmsQuery } from "../../store/slices/films-slice";
import { useFavorites } from "../hooks/use-favorites";

export function Header() {
  const { isAuth } = useAuth();
  useFavorites();
  useGetFilmsQuery(5);

  return isAuth ? (
    <header>
      <div className="container py-3 mx-auto px-4 min-h-16 flex flex-col sm:flex-row gap-4 justify-between items-center text-white">
        <NavLink to="/">
          <HeaderLogo />
        </NavLink>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/favorites"
            className="bg-transparent hover:bg-white font-semibold hover:text-amber-500 py-1 px-2 border border-white hover:border-transparent rounded"
          >
            Favorites
          </NavLink>
          <NavLink
            to="/history"
            className="bg-transparent hover:bg-white font-semibold hover:text-amber-500 py-1 px-2 border border-white hover:border-transparent rounded"
          >
            History
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              signOut();
            }}
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-amber-500 py-1 px-2 border border-white hover:border-transparent rounded"
          >
            SignOut
          </NavLink>
        </nav>
      </div>
    </header>
  ) : (
    <header>
      <div className="container py-3 mx-auto px-4 min-h-16 flex flex-col sm:flex-row gap-4 justify-between items-center text-white">
        <NavLink to="/">
          <HeaderLogo />
        </NavLink>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/signin"
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-amber-500 py-1 px-2 border border-white hover:border-transparent rounded"
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
      </div>
    </header>
  );
}
