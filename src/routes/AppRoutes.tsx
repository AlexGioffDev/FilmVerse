import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Home/Homepage";
import { MoviesCountryPage } from "../pages/Movies/MoviesCountryPage";
import { Layout } from "../components/Layout/Layout";
import { MoviePage } from "../pages/Movie/MoviePage";
import { MoviesCategoryPage } from "../pages/Movies/MoviesCategoryPage";
import { SearchPage } from "../pages/Search/SearchPage";
import { NoFoundPage } from "../pages/NoFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Homepage />} />

        <Route
          path="/movies/country/:country"
          element={<MoviesCountryPage />}
        />
        <Route
          path="/movies/category/:category"
          element={<MoviesCategoryPage />}
        />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="*" element={<NoFoundPage />} />
      </Route>
    </Routes>
  );
};
