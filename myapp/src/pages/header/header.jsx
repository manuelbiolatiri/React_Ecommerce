import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">
        VS_SHOP
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/shop" styles={{ color: "white" }}>
            Home
          </Nav.Link>

          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" inline="true">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;