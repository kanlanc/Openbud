import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchTerm } from "../actions/index";
import RaisedButton from "material-ui/RaisedButton";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.SearchTerm(this.state.terms);
    this.setState({ terms: "" });
  }
  handleLucky(e) {
    e.preventDefault();
    // After implementing machine learning show the most probable favourite projects
  }
  render() {
    const style = {
      marginTop: "2vh",
      width:"30vh"
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="terms"
            value={this.state.terms}
            type="text"
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
            style={{width:"90vh",height:"5vh",padding:"1vh",fontSize:"3vh"}}
          />
          <br/>
          <RaisedButton label="Search" type="submit" primary={true} style={{...style,marginLeft:"14vh"}} />
          <RaisedButton label="Feeling Lucky?" onClick={this.handleLucky} secondary={true} style={{...style,marginLeft:"1vh"}}/>
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

export default connect(mapStateToProps, MapDispatchToProps)(SearchBar);
