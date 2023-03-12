import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./routes/Counter";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./routes/RootLayout";
import { History } from "./routes/History";
import { About } from "./routes/About";
import { ErrorBoundary } from "./routes/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Counter /> },
      { path: "/history", element: <History /> },
      { path: "/about", element: <About /> },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
