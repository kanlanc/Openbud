import React, { Component } from "react";
import Navbar from "./Navbar";
import Bookmarkedrepos from "./Bookmarkedrepos";
import Recommendedrepos from "./Recommendedrepos";

// TODO:
// - FIX A USER DESIGN FOR THIS PAGE WHICH IS EITHER UDEMY'S DESIGN OR MAKE IT GITHUB DESIGN
// - Turn the value of the search bar to the one searched
// - Remove the recommended and bookmarked repos from here and include them in the UserDashboard component

class Projects extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div
          style={{
            margin: "7%",
          }}
        >
          Repos will turn up here similar to github but before this design
          checkout how to integrate with github api.
        </div>
        <br />
        <Bookmarkedrepos />
        <Recommendedrepos />
      </div>
    );
  }
}

export default Projects;
