import React, { Component } from "react";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };
  }

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleShow = () => {
    this.setState({ showModal: true });
  };

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
          <Button
            className="ml-md-5"
            variant="outline-light"
            onClick={this.handleShow}
          >
            Sign In
          </Button>
        </Navbar>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header className="border-0">
            <span
              className="close"
              onClick={this.handleClose}
              style={{ cursor: "pointer" }}
            >
              &times;
            </span>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Navigation;
