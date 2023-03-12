import { useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  let error = useRouteError();
  console.log(error);
  return (
    <div className="flex h-16 items-center justify-center gap-4">
      <span>Error!</span>
    </div>
  );
}
