import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes/Root";

import "./index.css";
import { Feed } from "./routes/Feed";
import { User } from "./routes/User";
import { Notifications } from "./routes/Notifications";
import { Events } from "./routes/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
