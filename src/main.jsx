import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizzPage from "./components/quizz/QuizzPage";
import App from "./App";
import Homepage from "./pages/Homepage";
import LoadingPage from "./components/LoadingPage";
import Questions from "./components/quizz/Questions";
import Results from "./pages/Results";
import GoodPratices from "./components/GoodPratices";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/quizz",
        element: <QuizzPage />,
      },

      {
        path: "/loading",
        element: <LoadingPage />,
      },

      { path: "/questions", element: <Questions /> },

      { path: "/resultats", element: <Results /> },
      { path: "/ressources", element: <GoodPratices /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
