import React, { Component } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import "../../CSS/bootstrap.css";
import { withRouter } from "react-router-dom";

// TODO:
// - FIX A USER DESIGN FOR THIS PAGE WHICH IS EITHER UDEMY'S DESIGN OR MAKE IT GITHUB DESIGN
// - Turn the value of the search bar to the one searched
// - Remove the recommended and bookmarked repos from here and include them in the UserDashboard component
// - On what should the repo that is returned from the search should be judged

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between",
    marginBottom: "12vh",
    marginRight: "2vh"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between",
    width: "55vh",
    height: "50vh"
  },

  makeitflex: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between"
  },

  title: {
    marginBottom: 16,
    fontSize: 28,
    maxHeight: "5vh"
  },
  paragraph: {
    fontSize: "100%",
    maxHeight: "5vh"
  },
  size: {
    padding: 20,
    fontSize: 20
  }
};

function SimpleCard(props) {
  return (
    <div className={props.classes.root}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={props.classes.card}>
          <CardContent>
            <Typography
              variant="headline"
              component="h2"
              className={props.classes.title}
            >
              {props.projectName ? props.projectName : "Loading..."}
            </Typography>
            <Typography component="p" className={props.classes.paragraph}>
              {props.description ? props.description : "Please wait a moment"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="raised" size="large" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

class Projects extends Component {
  ComponentDidMount() {}
  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            margin: "4%"
          }}
        >
        </div>
        <br />
        <div className="container">
          <Typography variant="display1" gutterBottom>
            These projects match the description given...
          </Typography>
          <br />
          <Grid container spacing={16}>
            <SimpleCard
              classes={this.props.classes}
              projectName="Material UI"
              description="This is the description for sample 1"
            />
            <SimpleCard
              classes={this.props.classes}
              projectName="OpenBud"
              description="This is the description for sample 2"
            />
            <SimpleCard
              classes={this.props.classes}
              projectName="Project 3"
              description="This is the description for sample 3"
            />
            <SimpleCard
              classes={this.props.classes}
              projectName="Project 3"
              description="This is the description for sample 3"
            />
            <SimpleCard
              classes={this.props.classes}
              projectName="Project 3"
              description="This is the description for sample 3"
            />
            <SimpleCard
              classes={this.props.classes}
              projectName="Project 3"
              description="This is the description for sample 3"
            />
            <SimpleCard
              classes={this.props.classes}
              projectName="Project 3"
              description="This is the description for sample 3"
            />
          </Grid>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    interterms: state.term
  };
}

const MapDispatchToProps = dispatch => ({});

export default withRouter(
  withStyles(styles)(connect(mapStateToProps, MapDispatchToProps)(Projects))
);