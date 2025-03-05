import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type PageProps = {
  title: string;
  children: JSX.Element[] | JSX.Element;
};

export const ShowMenu = ({ title, children }: PageProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <div className="relative">
      <button
        className="font-light uppercase cursor-pointer text-md text-primary dark:text-secondary"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {title}
      </button>
      <div
        className={`
        absolute  p-2 border max-h-[350px] overflow-y-auto  rounded-sm bg-secondary text-primary border-primary transition-all ease-in duration-300 flex flex-col gap-y-4
        ${showMenu ? "z-20 opacity-100 top-5" : "-z-20 opacity-0 top-20"}
        `}
      >
        {children}
      </div>
    </div>
  );
};
