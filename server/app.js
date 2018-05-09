var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt");
var mongoose = require("mongoose");
var config = require("./config");
let jwt = require("jsonwebtoken");

var index = require("./routes/index");
var users = require("./routes/users");
var projects = require("./routes/projects");

var app = express();

mongoose.connect(config.database, function(err) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log("MongoDB Listening at port 3000...");
  }
});

mongoose.Promise = Promise;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers["authorization"];
  if (!token) return next(); //if no token, continue

  token = token.replace("Bearer ", "");

  jwt.verify(token, config.secret, function(err, user) {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Please register or login"
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});

app.use(function(req, res, next) {
   
    res.locals.user = "";
    res.locals.authenticated = false;
  
  next();
});

app.use("/api", index);
app.use("/api/users", users);
app.use("/api/projects", projects);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { err: err });
});

// module.exports = app;
app.listen(3000, () => {
  console.log("Localhost running @ port 3000");
});
