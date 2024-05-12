import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { SignInPage } from "../pages/signin-page";
import { SignUpPage } from "../pages/signup-page";
import { FavoritesPage } from "../pages/favorites-page";
import { HistoryPage } from "../pages/history-page";
import { Search } from "../pages/search";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
