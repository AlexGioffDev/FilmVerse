import { Link } from "react-router-dom";
import { Movie } from "../../types/types";
import { motion } from "motion/react";

type PropsPage = {
  movie: Movie;
};

export const MovieCard = ({ movie }: PropsPage) => {
  return (
    <motion.div
      initial={{ opacity: 0, z: -10 }}
      animate={{ opacity: 1, z: 10 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      whileHover={{
        scale: 1.1,
        marginLeft: "0.7%",
        marginRight: "0.7%",
      }}
      className={`min-w-[300px]  md:min-w-[200px] h-[200px] md:h-[118px] relative  rounded-sm cursor-pointer group`}
    >
      <div
        className="absolute inset-0 bg-center bg-cover "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
      />

      <div className="absolute w-full border border-transparent text-secondary flex flex-col gap-y-1 group-hover:border-accent p-2 h-full opacity-0 group-hover:opacity-100 -top-[5px] group-hover:top-0 -z-10 bg-black/70 group-hover:z-20  transition-all duration-800 ease-in-out ">
        <p className="text-[12px] font-bold">
          {movie.title.length > 20
            ? movie.title.slice(0, 20) + "..."
            : movie.title}
        </p>
        <p className="text-[10px] hidden md:block ">
          {movie.overview.slice(0, 80)}...
        </p>

        <p className="text-[10px] md:hidden ">
          {movie.overview.slice(0, 250)}...
        </p>
        <Link
          className="flex items-center self-end justify-center w-6 h-6 p-1 rounded-full bg-slate-300 text-slate-900"
          to={`/movies/${movie.id}`}
        >
          &rarr;
        </Link>
      </div>
    </motion.div>
  );
};
