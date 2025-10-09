import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ReactDOM from "react-dom/client";

import AppLayout from "./Components/AppLayout.jsx";
import SplashPage from "./Pages/SplashPage.jsx";
import MenuPage from "./Pages/MenuPage.jsx";
import HiringPage from "./Pages/HiringPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";


// ✅ Define all routes here
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <SplashPage /> },
            { path: "menu", element: <MenuPage /> },
            { path: "hiring", element: <HiringPage /> },
            { path: "*", element: <ErrorPage /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);