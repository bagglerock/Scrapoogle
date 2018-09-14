import React, { Component } from "react";

import Hero from "../src/components/Hero/Hero";
import Nav from "../src/components/Nav/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Hero/>
      </div>
    )
  }
}

export default App;
