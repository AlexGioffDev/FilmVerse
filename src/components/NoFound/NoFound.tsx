import { Link } from "react-router-dom";

export const NoFound = ({ message = "404 Page Not Found" }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="space-y-4 text-center">
        <p className="text-xl font-bold uppercase text-accent">{message}</p>
        <p className="text-lg text-primary dark:text-secondary">
          Go back to{" "}
          <Link to="/" className="text-blue-400">
            HomePage
          </Link>
        </p>
      </div>
    </div>
  );
};
