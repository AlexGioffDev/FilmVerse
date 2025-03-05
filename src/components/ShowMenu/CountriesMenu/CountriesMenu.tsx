import { Link } from "react-router-dom";
import { ShowMenu } from "../ShowMenu";

export const CountriesMenu = () => {
  const countries = [
    {
      country: "España",
      code: "es",
    },
    {
      country: "French",
      code: "fr",
    },
    {
      country: "USA",
      code: "us",
    },
    {
      country: "China",
      code: "cn",
    },
    {
      country: "S.Korea",
      code: "kr",
    },
    {
      country: "Japan",
      code: "jp",
    },
    {
      country: "Italy",
      code: "it",
    },
  ];

  return (
    <ShowMenu title="Country">
      {countries.map((country) => {
        return (
          <Link
            key={country.code}
            className="px-4 py-1 transition-all duration-300 ease-in rounded-md hover:bg-primary hover:text-accent"
            to={`movies/country/${country.code}`}
          >
            {country.country}
          </Link>
        );
      })}
    </ShowMenu>
  );
};
