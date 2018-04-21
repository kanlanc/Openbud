import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/projects" component={Projects} />
                </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
