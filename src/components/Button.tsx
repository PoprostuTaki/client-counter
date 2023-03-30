import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BProps = {
  onClick: () => void;
  children: ReactNode;
  small?: boolean;
  title?: string;
};

export function ButtonExample({ onClick, children, small, title }: BProps) {
  const className = twMerge(
    "fancy-border group text-emerald-800 self-center items-center justify-center before:-inset-1 after:-inset-1 after:blur-0 after:transition hover:after:blur-sm",
    small ? "w-1/2 h-16" : "w-full h-full"
  );
  return (
    <button onClick={onClick} type="button" title={title} className={className}>
      {children}
    </button>
  );
}
