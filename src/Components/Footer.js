import React from "react";
import { Row, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <>
      <Row>
        <Col>
          <h3>Logo</h3>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row noGutters>
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
