import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Main/Home";
import Projects from "./components/Main/Projects";
import AddProject from "./components/Project/AddProject";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import UserDashboard from './components/User/UserDashboard';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  {/*
                  TODO: Protect the below routes until the user has logged in
                  */}
                  <Route exact path="/projects/addproject" component={AddProject} />
                  <Route exact path="/userdashboard" component={UserDashboard} />
                </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
