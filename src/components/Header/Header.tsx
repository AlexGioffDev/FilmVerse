import { Link, useNavigate } from "react-router-dom";
import { CategoriesMenu } from "../ShowMenu/CategoriesMenu/CategoriesMenu";
import { CountriesMenu } from "../ShowMenu/CountriesMenu/CountriesMenu";
import { useState } from "react";
import { useStore } from "../../store/store";

export const Header = () => {
  const { toggleTheme } = useStore();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-3 py-2 md:px-12 dark:bg-primary bg-secondary">
      <div className="flex items-center gap-x-4">
        <Link
          className="text-2xl font-bold uppercase md:text-4xl text-accent"
          to="/"
        >
          FilmVerse
        </Link>

        <div className="relative flex items-center gap-x-2 md:gap-x-8">
          <CategoriesMenu />
          <CountriesMenu />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className="relative w-20 h-10 border cursor-pointer dark:border-secondary rounded-3xl border-primary"
          onClick={toggleTheme}
        >
          <div className="absolute w-8 h-8 transition-all duration-500 ease-in-out border rounded-full bg-amber-400 border-stone-800 top-1 left-2 dark:left-9 dark:bg-stone-200" />
        </div>
        <div className="items-center hidden px-2 py-1 border-2 rounded-md md:flex md:blockrelative gap-x-4 bg-secondary border-accent">
          <input
            className="bg-secondary focus:outline-none text-stone-800"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Movies"
            value={query}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (!query.trim()) return;
                navigate(`search/${query}`);
                setQuery("");
              }
            }}
          />
          <button
            className="p-2 bg-secondary"
            onClick={() => {
              if (!query.trim()) return;
              navigate(`search/${query}`);
              setQuery("");
            }}
          >
            <img src="/icon-search.png" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
