import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./Components/AppNavbar.jsx";
import HiringPage from "./Pages/HiringPage.jsx";
import SplashPage from "./Pages/SplashPage.jsx";
import MenuPage from "./Pages/MenuPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import {Container} from "reactstrap"




function App() {

    return (
    <>
        <Container className="my-5">
            <AppNavbar/>
        <HiringPage/>
        <SplashPage/>
        <MenuPage/>
        <ErrorPage/>
                </Container>

                IM HERE ON APP
    </>
  )
}

export default App
