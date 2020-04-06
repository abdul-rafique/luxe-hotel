import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Breadcrumb,
  Carousel,
  ListGroup,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container fluid className="p-0">
          {/* <Row>
            <Col> */}
          <Card className="rounded-0 border-0">
            <Card.Img
              src={process.env.PUBLIC_URL + "./Images/rooms-cover-page.jpg"}
              className="rounded-0"
              alt=""
            />

            <Card.ImgOverlay className="d-flex justify-content-center align-items-center page-cover">
              <div>
                <h1 className="text-white" id="rooms-page-title">
                  Rooms
                </h1>
                {/* <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Rooms</Breadcrumb.Item>
                </Breadcrumb> */}
              </div>
            </Card.ImgOverlay>
          </Card>
          {/* </Col>
          </Row> */}
        </Container>

        <Container className="pl-5 pr-5">
          <Row className="p-5">
            <Col>
              <Card className="rounded-0 border-0 shadow">
                <Row className="m-0">
                  <Col md="7" className="p-0">
                    <Carousel indicators={false}>
                      <Carousel.Item>
                        <img
                          className="w-100"
                          src={process.env.PUBLIC_URL + "./Images/room2.jpg"}
                          alt=""
                          style={{ height: 400 }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="w-100"
                          src={process.env.PUBLIC_URL + "./Images/room3.jpg"}
                          alt=""
                          style={{ height: 400 }}
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                  <Col className="pt-4 pb-4">
                    <div className="pl-3">
                      <h3>Deluxe Room</h3>
                      <h4 className="d-inline-block mt-2">
                        <sup>$</sup>100
                      </h4>
                      /<em>per night</em>
                    </div>

                    <ListGroup className="mt-2">
                      <ListGroup.Item className="border-0 pt-0 pb-0">
                        <h6 className="d-inline-block mr-2">Adults:</h6>
                        <span>1</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 pt-0 pb-0">
                        <h6 className="d-inline-block mr-2">Categories:</h6>
                        <span>Single</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 pt-0 pb-0">
                        <h6 className="d-inline-block mr-2">Facilities:</h6>
                        <span>HD flat-screen TV, Telephone, Shower</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 pt-0 pb-0">
                        <h6 className="d-inline-block mr-2">Size:</h6>
                        <span>
                          22m<sup>2</sup>
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 pt-0 pb-0">
                        <h6 className="d-inline-block mr-2">Bed Type:</h6>
                        <span>One Bed</span>
                      </ListGroup.Item>
                    </ListGroup>

                    <Button
                      variant="primary"
                      // size="lg"
                      className="ml-4 mt-3 rounded-0"
                    >
                      Read More
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Rooms;
