import React, { Component } from "react";
// import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";
import Navigation from "./Components/Navigation";
import MyFooter from "./Components/Footer";

import Home from "./Components/User/Home";
import Rooms from "./Components/User/Rooms";
import Restaurent from "./Components/User/Restaurent";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/restaurent" component={Restaurent} />
          <MyFooter />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
