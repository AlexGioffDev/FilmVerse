import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow space-y-4 overflow-auto transition-all duration-500 ease-in-out dark:bg-primary bg-secondary">
        <Outlet />
      </main>
    </div>
  );
};
