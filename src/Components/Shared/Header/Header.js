import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import logo from "../../../images/logo.png";

const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className='p-3'  sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center '>
                        <img height={50} src={logo} alt="" />
                        Shutter Studio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#deets">About </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;