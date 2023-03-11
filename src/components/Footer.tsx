import { IconLinkedIn } from "./IconLinkedIn";
import { IconGitHub } from "./IconGitHub";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="container mt-auto flex flex-col items-center justify-between gap-2 p-4 sm:flex-row md:px-16">
      <span>Rafał Piekarski &copy; 2023</span>
      <div className="flex gap-2 text-zinc-800">
        <Link className="" to="https://github.com/PoprostuTaki">
          <IconGitHub />
        </Link>
        <Link to="https://www.linkedin.com/in/rafalpiekarski85/">
          <IconLinkedIn />
        </Link>
      </div>
    </div>
  );
}
