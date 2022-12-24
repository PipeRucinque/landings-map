import React from 'react'
import Button from 'react-bootstrap/Button';
import {Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap/';
import { NavLink, Link } from "react-router-dom";

const styles = {
  color: "white",
}

 const Footer = () => {
  return (
    <>
        <Navbar fixed="bottom" key="md" bg="dark" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" style={styles}>Footer del proyecto</Navbar.Brand>
          </Container>
        </Navbar>
    </>
  )
}

export default Footer
