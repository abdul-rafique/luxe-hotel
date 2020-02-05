import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
          <Navbar.Brand href="#">Luxe Hotel</Navbar.Brand>
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
