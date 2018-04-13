import React, { Component } from "react";
import Navbar from "./Navbar";
import Bookmarkedrepos from "./Bookmarkedrepos";


class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        Repos will turn up here similar to github but before this design checkout how to integrate with gthub api
        <Bookmarkedrepos/>
      </div>
    );
  }
}

export default Projects;
