import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import brand from '../assets/images/logo.jpeg';
function AppNavbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar color={"black"} expand="md" dark>
                <NavbarBrand href="/" className="me-6 p-2">
                    <img
                    alt="logo"
                    src= {brand}
                    style={{
                        height: 80,
                        width: 80
                    }}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className ="me-auto" navbar>
                        <NavItem><NavLink href="/">Splash Page</NavLink></NavItem>
                        <NavItem><NavLink href="/hiring">Hiring Page</NavLink></NavItem>
                        <NavItem><NavLink href="/menu">Menu Page</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default AppNavbar;
