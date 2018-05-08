import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { SearchTerm } from "../../actions/index";
// import Button from 'material-ui/Button';
import SearchBar from "material-ui-search-bar";
import "../../CSS/Navbar.css"
import { withStyles } from "material-ui/styles";

const styles = {
  
  margin: "0 auto",
  maxWidth: 900,
  height: "8vh",
  width:"75%",
  fontsSize:{fontSize:"20px",width:"75%"}

};

class Navbar extends Component {
  componentDidMount() {
    this.setState({terms:this.props.interterms})
  }
  
  constructor(props) {
    super(props);
    this.state = {
      terms: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.props.SearchTerm(this.state.terms);
    this.setState({ terms: e });
    // this.props.history.push("/projects");
  }

  render() {
    const style = {
      display: "flex",
      flex:"1",
      margin:" 3vh 0vh"
    };
    return (
      <div>
        <div className="block" style={style}>
          <h2 className="space-left-right" >OpenBud</h2>
         {/* <form onSubmit={this.handleSubmit} style={{width:"50%"}}>
            <input
              name="terms"
              value={this.state.terms}
              type="text"
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
              style={{
                width: "100%",
                height: "3vh",
                padding: "1vh",
                fontSize: "2vh"
              }}
            />*/}
            <div style={{width:"50%"}}>
            <SearchBar
            onChange={e => {
              this.setState({ terms: e });
            }}
            onRequestSearch={e => this.handleSubmit(e)}
            name="terms"
            value={this.state.terms}
            inputProps={{ className: this.props.classes.fontsSize }}  
            style={{
              margin: "0 auto",
              maxWidth: 700,
              height: "7vh"
            }}
            
          />
          </div>
          {/*</form>*/}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state.term.term);
    console.log(state.term);
    console.log(state);
    return {
      interterms: state.term.term
    };
  }
  
  const MapDispatchToProps = dispatch => ({
    SearchTerm: term => {
      dispatch(SearchTerm(term));
    }
  });


export default withRouter(
  withStyles(styles)(connect(mapStateToProps, MapDispatchToProps)(Navbar))
);