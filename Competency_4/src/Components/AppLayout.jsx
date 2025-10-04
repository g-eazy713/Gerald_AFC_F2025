import {Outlet} from "react-router-dom"
import AppNavBar from "./AppNavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';



const AppLayout = ()=> {
    return (
        <>
        <AppNavBar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AppLayout;