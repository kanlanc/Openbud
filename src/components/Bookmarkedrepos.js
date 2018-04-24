import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import "../CSS/bootstrap.css";
import HorizontalGridList from  "./GridList";


/**
 * TODO:
-  Show this component in the form of cards like how udemy does and make them scrollable to the sideways 
    
    solution:-Use material UI Gridlist for this task

       

-  Make the heading as "Discover yourself"
 */
const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between",
    marginBottom:"12vh",
    marginRight:"2vh"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between",
    width: "55vh",
    height:"50vh"
  },

  makeitflex:{
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between"
  },

  title: {
    marginBottom: 16,
    fontSize: 28,
    maxHeight:"5vh"
  },
  paragraph: {
    fontSize: "100%",
    maxHeight:"5vh"
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

class Bookmarkedrepos extends Component {
  render() {
    return (
      <div className="container">
      <Typography variant="display1" gutterBottom>Bookmarked Projects</Typography>
        <br />
        <Grid container spacing={12}>
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
          
        </Grid>
        <HorizontalGridList/>
        </div>
    );
  }
}

export default withStyles(styles)(Bookmarkedrepos);
