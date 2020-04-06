import React from "react";
import { Row, Col, Card, Nav, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyFooter() {
  return (
    <>
      <Row noGutters className="bg-primary">
        <Col sm={3} md={6} lg>
          <Card className="rounded-0 border-0 pl-3 pr-3 bg-none text-white">
            <Card.Body>
              <h3>Logo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quaerat reprehenderit quo repellendus nostrum.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm md={6} lg>
          <Card className="rounded-0 border-0 bg-none text-white">
            <Card.Body className="mx-lg-auto">
              <h5>Useful Links</h5>
              <Nav className="flex-column">
                <Nav.Link className="text-light">Blog</Nav.Link>
                <Nav.Link>
                  <Link className="text-light" to="/rooms">
                    Rooms
                  </Link>
                </Nav.Link>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col sm md={6} lg>
          <Card className="rounded-0 border-0 pl-md-3 pl-lg-0 bg-none text-white">
            <Card.Body className="mx-lg-auto">
              <h5>Privacy</h5>
              <Nav className="flex-column">
                <Nav.Link className="text-light">Career</Nav.Link>
                <Nav.Link className="text-light">About Us</Nav.Link>
                <Nav.Link className="text-light">Contact Us</Nav.Link>
                <Nav.Link className="text-light">Services</Nav.Link>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col sm md={6} lg>
          <Card className="rounded-0 border-0 bg-none text-white">
            <Card.Body className="mx-lg-auto">
              <h5>Have a Question?</h5>
              <ListGroup>
                <ListGroup.Item
                  className="border-0 rounded bg-none text-light"
                  action
                >
                  <span></span>
                  <span>Plot # 123, DHA-4, Karachi</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 rounded bg-none text-light"
                  action
                >
                  <span></span>
                  <span>+92-341-2361372</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 rounded bg-none text-white"
                  action
                  href="/home"
                >
                  <span></span>
                  <span>info@abc.com</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row noGutters className="bg-primary text-white">
        <Col></Col>
        <Col md="8">
          <p className="text-center p-2 mt-3">
            &copy; Copyright 2020 - Designed & Developed by{" "}
            <b>&ldquo;Abdul Rafique&rdquo;</b>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default MyFooter;
