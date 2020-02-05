import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Home from "./Components/Home/Index";
import Navigation from "./Components/Navigation";
import MyFooter from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Home />
        <MyFooter />
      </>
    );
  }
}

export default App;
