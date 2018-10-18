import React, {Component} from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Hero from "../src/components/Hero/Hero";
import Nav from "../src/components/Nav/Nav";
import Modal from "../src/components/Modal/Modal";

import "./App.css";

class App extends Component {

  state = {
    modal: false
  }

  _modalToggle = () => {
    if(this.state.modal){
      this.setState({
        modal: false
      })
    } else {
      this.setState({
        modal: true
      })
    }
  }

  render() {

    return(
      <Router>
        <main>
          <Nav
            action={this._modalToggle}
          />
          <Hero/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={Home}/>
          </Switch>
          {
            this.state.modal
            ?
            (
              <Modal/>
            )
            :
            ""
          }
        </main>
      </Router>
    )

  }
}

export default App;
