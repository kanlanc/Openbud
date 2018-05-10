import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "5%"
  },
  button: {
    margin: theme.spacing.unit,
    width: 100
  },
  fontsSize: { fontSize: "15px" },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let {classes}=this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h2 className="">LOGIN</h2>
          </Grid>

          <form
            className={classes.container}
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                label="name"
                inputProps={{ className: this.props.classes.fontsSize }}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                style={{ width: "75%", margin: "50 auto" }}
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange("name")}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="username"
                label="username"
                inputProps={{ className: this.props.classes.fontsSize }}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                style={{ width: "75%", margin: "50 auto" }}
                className={classes.textField}
                value={this.state.username}
                onChange={this.handleChange("username")}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="password"
                label="password"
                type="password"
                inputProps={{ className: this.props.classes.fontsSize }}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                style={{ width: "75%", margin: "50 auto" }}
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleChange("password")}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="email"
                label="email"
                inputProps={{ className: this.props.classes.fontsSize }}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                style={{ width: "75%", margin: "50 auto" }}
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange("email")}
                margin="normal"
              />
            </Grid>
            <Button className={classes.button} variant="raised" color="primary">
              <h2 style={{padding:"2"}}>Send</h2>
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
