import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//import pages
import splashPage from "./Pages/SplashPage.jsx";
import errorPage from "./Pages/ErrorPage.jsx";
import randomDogPage from "./Pages/RandomDogPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import RandomDogPage from "./Pages/RandomDogPage.jsx";
import SplashPage from "./Pages/SplashPage.jsx";
import AppLayout from "./Components/AppLayout.jsx"
import navBar from "./Components/NavBar.jsx";

navBar
splashPage
errorPage
randomDogPage
// pass in an object
// this is how you route the browser to get items
const router = createBrowserRouter([{
    path:"/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
        {path: "results",element: <RandomDogPage />},
        {path: "splash",element: <SplashPage />},
        {index: true, element: <SplashPage/>}
    ]




}]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={(router)}/>
  </StrictMode>,
)
