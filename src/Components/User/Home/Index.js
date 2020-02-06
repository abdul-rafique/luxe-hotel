import React from "react";
import { Container } from "react-bootstrap";
import Slider from "./Slider";
import Section from "./Section";

function Home() {
  return (
    <>
      <Slider />
      <Container fluid={true} style={{ padding: 0 }}>
        <Section />
      </Container>
    </>
  );
}

export default Home;
