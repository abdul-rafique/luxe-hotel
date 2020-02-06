import React from "react";
import { Row, Col, Card, Nav, ListGroup } from "react-bootstrap";

function MyFooter() {
  return (
    <>
<<<<<<< HEAD
      <Row noGutters className="border-top">
=======
      <Row noGutters>
>>>>>>> a2fde41cb7737289c0d6efa72eb071d5cb3f030f
        <Col>
          <Card className="rounded-0 border-0 pl-3 pr-3">
            <Card.Body>
              <h3>Logo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quaerat reprehenderit quo repellendus nostrum.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded-0 border-0">
            <Card.Body>
              <h5>Useful Links</h5>
              <Nav className="flex-column">
                <Nav.Link>Blog</Nav.Link>
                <Nav.Link>Rooms</Nav.Link>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded-0 border-0">
            <Card.Body>
              <h5>Privacy</h5>
              <Nav className="flex-column">
                <Nav.Link>Career</Nav.Link>
                <Nav.Link>About Us</Nav.Link>
                <Nav.Link>Contact Us</Nav.Link>
                <Nav.Link>Services</Nav.Link>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded-0 border-0">
            <Card.Body>
              <h5>Have a Question?</h5>
              <ListGroup>
                <ListGroup.Item className="border-0" action>
                  <span></span>
                  <span>Plot # 123, DHA-4, Karachi</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0" action>
                  <span></span>
                  <span>+92-341-2361372</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0" action href="/home">
                  <span></span>
                  <span>info@abc.com</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row noGutters className="border-top">
        <Col></Col>
        <Col md="8">
          <p className="text-center p-2 mt-3">
            &copy; Copyright 2020 - Designed & Developed by Abdul Rafique
          </p>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default MyFooter;
