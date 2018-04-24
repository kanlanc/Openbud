import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { SearchTerm } from "../actions/index";
import Button from "material-ui/Button";
import SearchBar from "material-ui-search-bar";


class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLucky = this.handleLucky.bind(this);
  }
  handleSubmit(e) {
    // e.preventDefault();
    this.props.SearchTerm(this.state.terms);
    this.setState({ terms: "" });
    this.props.history.push("/projects");
  }
  handleLucky(e) {
    e.preventDefault();
    // After implementing machine learning show the most probable favourite projects
  }
  render() {
    const style = {
      marginTop: "4vh",
      width: "35vh"
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/*<input
            name="terms"
            value={this.state.terms}
            type="text"
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
            style={{width:"90vh",height:"5vh",padding:"1vh",fontSize:"3vh",marginLeft:"2vh"}}
          />*/}
          <SearchBar
            onChange={e => {
              this.setState({ terms: e });
            }}
            onRequestSearch={e => this.handleSubmit(e)}
            name="terms"
            value={this.state.terms}
            
            style={{
              margin: "0 auto",
              maxWidth: 900,
              height: "8vh"
            }}
            
          />
          <br />
          <Button
            variant="raised"
            label="Search"
            type="submit"
            color="primary"
            size="large"
            style={{ ...style, marginLeft: "8vh" }}
          >
            Search
          </Button>
          <Button
            variant="raised"
            label="Feeling Lucky?"
            onClick={this.handleLucky}
            type="submit"
            color="secondary"
            size="large"
            style={{ ...style, marginLeft: "4vh" }}
          >
            Feeling Lucky?
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.term);
  return {
    interterms: state.term
  };
}

const MapDispatchToProps = dispatch => ({
  SearchTerm: term => {
    dispatch(SearchTerm(term));
  }
});

export default withRouter(
  connect(mapStateToProps, MapDispatchToProps)(Searchbar)
);


