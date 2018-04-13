import React, { Component } from "react";
import SearchBar from "./SeachBar";
import "../App.css";

class Home extends Component {
  render() {
    const style = {
      marginLeft: "2vh",
      marginTop: "25vh",
      width: "100%",
      fontFamily: "Roboto",
      fontSize: "16vh"
    };
    return (
      <div className="center">
        <h1 style={style}>OpenBud </h1>
        <SearchBar />
      </div>
    );
  }
}

export default Home;
