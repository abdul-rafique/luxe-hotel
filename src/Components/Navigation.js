import React, { Component } from "react";
import { Navbar, Nav, Dropdown, Button, ButtonGroup } from "react-bootstrap";

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
          <ButtonGroup className="ml-md-3">
            <Button variant="secondary">Sign In</Button>
            <Button variant="light">Sign Up</Button>
          </ButtonGroup>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
