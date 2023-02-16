import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex justify-between px-2">
        <h1>CC</h1>
        <nav>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>History</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <div className="container h-full">{<Outlet />}</div>
      <footer>Footer</footer>
    </div>
  );
}
