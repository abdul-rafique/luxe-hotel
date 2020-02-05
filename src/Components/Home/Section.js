import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

function Section() {
  return (
    <>
      <Card className="mt-5 border-0">
        <Row noGutters>
          <Col className="pl-5 align-items-center" md>
            <h3 className="text-center">Check Room(s) Availability</h3>
            <p className="lead text-center mt-3">
              Find the best room which you deserve!
            </p>
          </Col>
          <Col md>
            <Card className="border-0" bg="primary" text="white">
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col xs>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date"></Form.Control>
                      </Col>
                      <Col xs>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date"></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Row>
                      <Col xs>
                        <Form.Label>Room(s)</Form.Label>
                        <Form.Control type="number"></Form.Control>
                      </Col>
                      <Col xs>
                        <Form.Label>Adult(s)</Form.Label>
                        <Form.Control type="number"></Form.Control>
                      </Col>
                      <Col xs>
                        <Form.Label>Kid(s)</Form.Label>
                        <Form.Control type="number"></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Button variant="secondary" block size="lg">
                    Check Availability
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>

      <Card className="mt-5 border-0">
        <Row noGutters={true}>
          <Col md>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "./Images/section_img1.jpg"}
              alt=""
            />
          </Col>
          <Col md>
            <Card.Body>
              <h3 className="">Our Reception Desk</h3>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid nemo odit maxime, aspernatur voluptas cum quos fugiat,
                impedit tempora provident quae dolore consectetur quas neque.
                Amet cupiditate odit vel eaque!
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card className="border-0">
        <Row noGutters>
          <Col md={{ order: 2 }}>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "./Images/section_img2.jpg"}
              alt=""
            />
          </Col>
          <Col md={{ order: 1 }}>
            <Card.Body>
              <h3>Our Services</h3>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid nemo odit maxime, aspernatur voluptas cum quos fugiat,
                impedit tempora provident quae dolore consectetur quas neque.
                Amet cupiditate odit vel eaque!
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card>
        <Card.Body className="text-center">
          <h3>Our Mission</h3>
          <p className="pl-5 pr-5 lead text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            nemo odit maxime, aspernatur voluptas cum quos fugiat, impedit
            tempora provident quae dolore consectetur quas neque. Amet
            cupiditate odit vel eaque!
          </p>
          <Button variant="primary" size="lg">
            Read more
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Section;
