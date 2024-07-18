// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout";
import HomePage from "../src/routes/homePage/homePage";
import ListPage from "../src/routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "../src/routes/login/login";
import Register from "../src/routes/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        // {
        //   path: "/profile",
        //   element: <ProfilePage />,
        // },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
