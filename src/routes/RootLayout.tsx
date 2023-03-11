import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function RootLayout() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden">
      <Header />
      {<Outlet />}
      <Footer />
    </div>
  );
}
