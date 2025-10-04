import './App.css'
import RandomDogPage from "./Pages/RandomDogPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import SplashPage from "./Pages/SplashPage.jsx";
import NavBar from "./Components/NavBar.jsx";

function App() {
  return (
    <>
        <NavBar> </NavBar>
        <h1> I am the App JSX</h1>
        <RandomDogPage/>
        <ErrorPage/>
        <SplashPage/>

    </>
  )
}

export default App
