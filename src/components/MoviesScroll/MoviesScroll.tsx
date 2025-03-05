import { Movie } from "../../types/types";
import { MovieCard } from "../MovieCard/MovieCard";

type PropsPage = {
  movies: Movie[];
  title: string;
  type: string;
};

export const MoviesScroll = ({ movies, title, type }: PropsPage) => {
  return (
    <section className="flex flex-col py-4 gap-y-4 ">
      <h2 className="text-xl font-light tracking-tight uppercase dark:text-secondary text-primary">
        {title}
      </h2>
      <div className="relative">
        <div className="flex gap-2 py-4 overflow-x-scroll scrollbar-hide md:px-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id + `-${type}`} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};
