import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />

        <Container></Container>
      </>
    );
  }
}

export default App;
