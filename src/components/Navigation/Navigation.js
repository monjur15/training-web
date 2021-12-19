import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import { } from './Navigation.css';

const Navigation = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="../../images/Training logo.svg"
                            width="100"
                            height="30"

                            // className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link id='Active' href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#cources">Cources</Nav.Link>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#user">{userIcon}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
    );
};

export default Navigation;