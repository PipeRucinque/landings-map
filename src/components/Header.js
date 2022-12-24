import React from 'react'
import Button from 'react-bootstrap/Button';
import {Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap/';
import { NavLink, Link } from "react-router-dom";

const styles = {
  color: "white",
}

 const Header = () => {
  return (
    <>
        <Navbar key="md" bg="dark" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" style={styles}>Header del proyecto</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  NASA menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/" style={styles}>Home</NavLink>
                  <NavLink className="nav-link" to="posts" style={styles}>NEA's</NavLink>
                  <NavLink className="nav-link" to="/landings" style={styles}>Landings</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}

export default Header
