import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Hero from "../src/components/Hero/Hero";
import Nav from "../src/components/Nav/Nav";

import "./App.css";

const App = () => {
  
  return(
    <Router>
      <main>
        <Nav/>
        <Hero/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={Home}/>
        </Switch>
      </main>
    </Router>
  )

  
}

export default App;
