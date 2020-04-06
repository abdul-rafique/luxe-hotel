import React, { Component } from "react";
import { Container, Card, Row, Col, Nav } from "react-bootstrap";
import $ from "jquery";

class Restaurent extends Component {
  render() {
    $(document).ready(function() {
      // $(".meal").mouseenter(function() {
      //   $(".meal-bg").css({ opacity: 0.4 });
      // });
      // $(".meal").mouseleave(function() {
      //   $(".meal-bg").css({ opacity: 0.2 });
      // });
    });
    return (
      <>
        <Card className="rounded-0 border-0">
          <Card.Img
            src={process.env.PUBLIC_URL + "./Images/restaurent-cover-page.jpg"}
            className="rounded-0"
            alt=""
          />

          <Card.ImgOverlay className="d-flex justify-content-center align-items-center page-cover">
            <div>
              <h1 className="text-white" id="rooms-page-title">
                Restaurent
              </h1>
            </div>
          </Card.ImgOverlay>
        </Card>

        <Container className="pt-5 pb-5">
          <Row>
            <Col md={1}></Col>
            <Col>
              <Nav.Link className="text-white">
                <Card className="meal">
                  <Card.Img
                    className="meal-bg"
                    src={process.env.PUBLIC_URL + "./Images/breakfast.jpg"}
                    alt=""
                  />
                  <Card.ImgOverlay className="d-flex justify-content-center align-items-center meal-bg-overlay">
                    <h3>Breakfast</h3>
                  </Card.ImgOverlay>
                </Card>
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link className="text-white">
                <Card className="meal">
                  <Card.Img
                    className="meal-bg"
                    src={process.env.PUBLIC_URL + "./Images/lunch.jpg"}
                    alt=""
                  />
                  <Card.ImgOverlay className="d-flex justify-content-center align-items-center meal-bg-overlay">
                    <h3>Lunch</h3>
                  </Card.ImgOverlay>
                </Card>
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link className="text-white">
                <Card className="meal">
                  <Card.Img
                    className="meal-bg"
                    src={process.env.PUBLIC_URL + "./Images/dinner.jpg"}
                    alt=""
                  />
                  <Card.ImgOverlay className="d-flex justify-content-center align-items-center meal-bg-overlay">
                    <h3>Dinner</h3>
                  </Card.ImgOverlay>
                </Card>
              </Nav.Link>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Restaurent;
