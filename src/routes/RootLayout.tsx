import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden">
      <Header />
      {<Outlet />}
      <footer className="mt-auto hidden md:flex">Footer</footer>
    </div>
  );
}
