import React from "react";
import { Outlet} from "react-router-dom";
import AppNavbar from "./AppNavbar.jsx";
import {Container} from "reactstrap";

function AppLayout() {
    return (
        <>
            <Container>
                <AppNavbar/>
                <Outlet />
            </Container>
        </>
    );
}

export default AppLayout;
