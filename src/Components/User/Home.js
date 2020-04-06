import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Form,
  Button
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

let today = new Date();
let tommorrow = new Date();
tommorrow.setDate(tommorrow.getDate() + 1);

function Section() {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tommorrow);
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "./Images/slide1.jpg"}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "./Images/slide2.jpg"}
            alt=""
          />
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row className="m-0">
          <Col>
            <Card className="my-5 border-0 shadow-lg">
              <Card.Body>
                <Row noGutters>
                  <Col md>
                    <Card className="border-0 d-flex align-items-center justify-items-center">
                      <Card.Body>
                        <h3 className="">Check Room(s) Availability</h3>
                        <p className="lead">
                          Find the best room which you deserve!
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md>
                    <Card className="border-info" bg="light">
                      <Card.Body>
                        <Form>
                          <Form.Group>
                            <Row>
                              <Col xs>
                                <Form.Label>Start Date</Form.Label>
                                <DatePicker
                                  className="form-control"
                                  selected={startDate}
                                  minDate={startDate}
                                  onChange={date => setStartDate(date)}
                                  dateFormat="dd/MM/yyyy"
                                />
                              </Col>
                              <Col xs>
                                <Form.Label>End Date</Form.Label>
                                <DatePicker
                                  className="form-control"
                                  selected={endDate}
                                  onChange={date => setEndDate(date)}
                                  minDate={endDate}
                                  dateFormat="dd/MM/yyyy"
                                />
                              </Col>
                            </Row>
                          </Form.Group>

                          <Form.Group>
                            <Row>
                              <Col xs>
                                <Form.Label>Room(s)</Form.Label>
                                <Form.Control as="select" custom>
                                  <option selected>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                </Form.Control>
                              </Col>
                              <Col xs>
                                <Form.Label>Adult(s)</Form.Label>
                                <Form.Control as="select" custom>
                                  <option selected>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                </Form.Control>
                              </Col>
                              <Col xs>
                                <Form.Label>Kid(s)</Form.Label>
                                <Form.Control as="select" custom>
                                  <option selected>0</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                </Form.Control>
                              </Col>
                            </Row>
                          </Form.Group>

                          <Button variant="outline-info" block size="lg">
                            Check Availability
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <Row className="m-0">
          <Col>
            <Card>
              <Card.Body>
                <img src="" alt="" />
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

        <Row className="m-0">
          <Col>
            <Card className="my-5 border-0 shadow-lg">
              <Card.Body>
                <Row noGutters={true}>
                  <Col md>
                    <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL + "./Images/section_img1.jpg"}
                      alt=""
                    />
                  </Col>
                  <Col md>
                    <Card className="border-0">
                      <Card.Body>
                        <h3 className="">Our Reception Desk</h3>
                        <p className="lead">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquid nemo odit maxime, aspernatur voluptas
                          cum quos fugiat, impedit tempora provident quae dolore
                          consectetur quas neque. Amet cupiditate odit vel
                          eaque!
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="m-0">
          <Col>
            <Card className="my-5 border-0 shadow-lg">
              <Card.Body>
                <Row noGutters>
                  <Col md={{ order: 2 }}>
                    <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL + "./Images/section_img2.jpg"}
                      alt=""
                    />
                  </Col>
                  <Col md={{ order: 1 }}>
                    <Card className="border-0">
                      <Card.Body>
                        <h3>Our Services</h3>
                        <p className="lead">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquid nemo odit maxime, aspernatur voluptas
                          cum quos fugiat, impedit tempora provident quae dolore
                          consectetur quas neque. Amet cupiditate odit vel
                          eaque!
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="m-0">
          <Col>
            <Card className="my-5 border-0 shadow-lg">
              <Card.Body className="text-center">
                <h3>Our Mission</h3>
                <p className="pl-5 pr-5 lead text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid nemo odit maxime, aspernatur voluptas cum quos fugiat,
                  impedit tempora provident quae dolore consectetur quas neque.
                  Amet cupiditate odit vel eaque!
                </p>
                <Button variant="outline-info" size="lg">
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Section;
