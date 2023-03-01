import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-2 border-b-zinc-200">
      <div className="mx-auto flex items-center justify-between px-2 py-2 md:container md:py-2 md:px-16">
        <Link to="/">
          <h1 className="p-2 font-bold">CC</h1>
        </Link>

        <button
          title="navigation"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="z-10 rounded-full p-1 md:hidden"
        >
          <svg
            stroke="black"
            fill="none"
            style={{
              transition: "rotate 0.3s, transform 0.5s",
              rotate: isOpen ? "0.125turn" : "0turn",
              translate: isOpen ? "1px -1px" : "0px 0px",
            }}
            viewBox="-10 -10 120 120"
            width="30"
          >
            <path
              style={{
                strokeDasharray: isOpen ? "60 100 60 300" : "60 31 60 300",
                strokeDashoffset: isOpen ? "-90" : "0",
              }}
              className="transition-all duration-500"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            ></path>
          </svg>
        </button>
        <nav
          className={`absolute inset-y-0 left-full flex w-full -translate-x-0 items-center justify-center bg-white/70 font-medium backdrop-blur-sm backdrop-filter transition duration-500 ease-in-out md:static md:left-0 md:w-auto md:translate-x-0 md:transition-none ${
            isOpen ? "-translate-x-full " : "-translate-x-0"
          }`}
        >
          <div className="flex flex-col gap-4  md:flex-row">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "before:scale-100" : "before:scale-0"
                } relative p-2 text-center text-xl before:absolute before:bottom-1.5 before:block before:h-0.5 before:w-[calc(100%-theme('padding.4'))] before:origin-left before:bg-zinc-900 before:transition before:duration-300 hover:before:scale-100 md:text-base`
              }
              to="/"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "before:scale-100" : "before:scale-0"
                } relative p-2 text-center text-xl before:absolute before:bottom-1.5 before:block before:h-0.5 before:w-[calc(100%-theme('padding.4'))] before:origin-left before:bg-zinc-900 before:transition before:duration-300 hover:before:scale-100 md:text-base`
              }
              to="/history"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              History
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "before:scale-100" : "before:scale-0"
                } relative p-2 text-center text-xl before:absolute before:bottom-1.5 before:block before:h-0.5 before:w-[calc(100%-theme('padding.4'))] before:origin-left before:bg-zinc-900 before:transition before:duration-300 hover:before:scale-100 md:text-base`
              }
              to="/about"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
