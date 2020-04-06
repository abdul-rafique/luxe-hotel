import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Modal,
  Card,
  Form,
  InputGroup
} from "react-bootstrap";

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
        <Navbar expand="lg" sticky="top" variant="dark" bg="primary">
          <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
          <Navbar.Brand className="brand" href="#">
            Luxe Hotel
          </Navbar.Brand>

          <Navbar.Collapse id="navbar">
            <Nav defaultActiveKey="/" className="ml-auto">
              <Nav.Item>
                <Link exact className="nav-link" to="/">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link exact className="nav-link" to="/rooms">
                  Our Rooms
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/restaurent">
                  Restaurant
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="#">
                  About Us
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="#">
                  Blog
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="#">
                  Contact
                </Link>
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

        <Modal show={this.state.showModal} onHide={this.handleClose} size="xl">
          <Modal.Header className="border-0">
            <span
              className="close"
              onClick={this.handleClose}
              style={{ cursor: "pointer" }}
            >
              &times;
            </span>
          </Modal.Header>
          <Modal.Body className="">
            <Card className="p-0">
              <Card.Body>
                <Row className="m-0">
                  <Col lg={"lg"}>
                    <Card className="rounded-0 pr-0 pr-lg-4 border-0 border-lg-right">
                      <Card.Body>
                        <h3 className="text-center">Sign in</h3>
                        <Form>
                          <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter your username/email"
                              size="lg"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <InputGroup size="lg">
                              <Form.Control
                                type="password"
                                placeholder="Enter password"
                              />
                              <InputGroup.Append>
                                <InputGroup.Text>P</InputGroup.Text>
                              </InputGroup.Append>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group>
                            <Form.Check label="Remember me" size="lg" />
                          </Form.Group>

                          <Button variant="outline-info" size="lg" block>
                            Sign in
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={"lg"}>
                    <Card
                      className="rounded-0 border-0 border-lg-left pl-0 pl-lg-4"
                      style={{ height: "100%" }}
                    >
                      <Card.Body>
                        <h3>Don't have an account?</h3>
                        <Button variant="info" size="lg" block>
                          Sign Up Now!
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Navigation;
