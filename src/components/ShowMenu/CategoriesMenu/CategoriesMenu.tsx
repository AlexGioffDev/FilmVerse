import { Link } from "react-router-dom";
import { ShowMenu } from "../ShowMenu";

export const CategoriesMenu = () => {
  const Categories = [
    {
      code: 28,
      name: "Action",
    },
    {
      code: 12,
      name: "Adventure",
    },
    {
      code: 16,
      name: "Animation",
    },
    {
      code: 35,
      name: "Comedy",
    },
    {
      code: 80,
      name: "Crime",
    },
    {
      code: 99,
      name: "Documentary",
    },
    {
      code: 18,
      name: "Drama",
    },
    {
      code: 10751,
      name: "Family",
    },
    {
      code: 14,
      name: "Fantasy",
    },
    {
      code: 36,
      name: "History",
    },
    {
      code: 27,
      name: "Horror",
    },
    {
      code: 10402,
      name: "Music",
    },
    {
      code: 9648,
      name: "Mystery",
    },
    {
      code: 10749,
      name: "Romance",
    },
    {
      code: 878,
      name: "Science Fiction",
    },
    {
      code: 10770,
      name: "TV Movie",
    },
    {
      code: 53,
      name: "Thriller",
    },
    {
      code: 10752,
      name: "War",
    },
    {
      code: 37,
      name: "Western",
    },
  ];

  return (
    <ShowMenu title="Category">
      {Categories.map((category) => {
        return (
          <Link
            key={`${category.name} - ${category.code}`}
            className="px-4 py-1 transition-all duration-300 ease-in rounded-md hover:bg-primary hover:text-accent"
            to={`movies/category/${category.code}`}
          >
            {category.name}
          </Link>
        );
      })}
    </ShowMenu>
  );
};
