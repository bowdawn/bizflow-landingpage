import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import NotImplementedPage from "../pages/NotImplementedPage";

export const platformPath = "/platform";
export const solutionsPath = "/solutions&services";
export const customersPath = "/customers";
export const supportPath = "/support";
export const blogPath = "/blog";
export const companyPath = "/company";
export const contactusPath = "/contactus";

const router = () => {
  return createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: platformPath,
          element: <NotImplementedPage />,
        },
        {
          path: solutionsPath,
          element: <NotImplementedPage />,
        },
        {
          path: customersPath,
          element: <NotImplementedPage />,
        },
        {
          path: supportPath,
          element: <NotImplementedPage />,
        },
        {
          path: blogPath,
          element: <NotImplementedPage />,
        },
        {
          path: companyPath,
          element: <NotImplementedPage />,
        },
        {
          path: contactusPath,
          element: <NotImplementedPage />,
        },

        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
};

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={router()} />;
};

export default AppRoutes;
