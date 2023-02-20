import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <Header />
      <div className="container h-full">{<Outlet />}</div>
      <footer className="hidden md:block">Footer</footer>
    </div>
  );
}
