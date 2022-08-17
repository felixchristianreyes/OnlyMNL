/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HomeNavbar.css";
import logo from "../../../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HomeNavbar = () => {
  return (
    <Navbar className="homeNavbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img className="navbarLogo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="add-markers">Add Marker</Nav.Link>
            <NavDropdown
              variant="light"
              title="Community"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Join Discord
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Buy me a Coffee
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
