import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#">Luxe Hotel</Navbar.Brand>
          <Nav style={{ flex: 1, justifyContent: "flex-end" }}>
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
        </Navbar>
      </>
    );
  }
}

export default Navigation;
