import React, { Component } from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar
          expand="lg"
          sticky="top"
          variant="dark"
          style={{ background: "#17c0eb" }}
        >
          <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
          <Navbar.Brand href="#">Luxe Hotel</Navbar.Brand>

          <Navbar.Collapse id="navbar">
            <Nav defaultActiveKey="/home" className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Our Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Restaurant</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5">Contact</Nav.Link>
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
