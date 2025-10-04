import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MenuPage from "./Pages/MenuPage.jsx";
import HiringPage from "./Pages/HiringPage.jsx";
import SplashPage from "./Pages/SplashPage.jsx";
import AppLayout from "./Components/AppLayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([{

    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {path: "/menu", element: <MenuPage/>},
        {path: "/", element: <SplashPage/>},
        {path: "/hiring", element: <HiringPage/>},
        {path: "*", element: <ErrorPage/>},
        {index: true, element: <SplashPage/>}
    ]
}]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={(router)}/>
    </StrictMode>,
);
