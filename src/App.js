import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SeachBar";
import { Switch, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

class Index extends Component {
  render() {
    const style = {
      marginLeft: "30vh",
      marginTop: "2vh",
      width: "20vh",
      fontFamily: "Roboto",
      fontSize:"8vh"
    };
    return (
      <div>
        <h1 style={style}>Openbud</h1>
        <SearchBar />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <Switch>
                <Route path="/" component={Index} />
              </Switch>
            </MuiThemeProvider>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
