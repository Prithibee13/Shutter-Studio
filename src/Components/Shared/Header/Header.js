import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import logo from "../../../images/logo.png";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => 
{

    const [user] = useAuthState(auth)

    const handleSignout =() =>
    {
        signOut(auth);
    }
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className='p-3' fixed='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
                        <img height={50} src={logo} alt="" />
                        Shutter Studio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About </Nav.Link>
                            {
                                user ? <button className='btn btn-link text-decoration-none text-white' onClick={handleSignout}>Sign Out</button> : <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;