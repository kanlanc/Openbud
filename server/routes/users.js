var express = require("express");
var router = express.Router();
let jwt = require("jsonwebtoken");
let config = require("../config");
var bcrypt = require("bcrypt");
var User = require("../models/User");
/* GET users listing. */

function generateToken(user) {
  //1. Dont use password and other sensitive fields
  //2. Use fields that are useful in other parts of the
  //app/collections/models
  var u = {
    username: user.username,
    id: user._id.toString()
  };

  var token = jwt.sign(u, config.secret, {
    expiresIn: 1440 // expires in 1 hour
  });

  return token;
}

router.post("/register", function(req, res, next) {
  /**
   * TODO: Implement sending email confirmation
   */
  let { name, username, email, password } = req.body;
  password = bcrypt.hashSync(password.trim(), 10);
  let input = { name, username, email, password };
  console.log(input);
  User.create(input)
    .then(user => {
      let token = generateToken(user);
      res.locals.user = user;
      res.locals.authenticated = true;
      res.status(200).json({
        message: "User creation was successful, enjoy your token",
        success: true,
        token
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err,
        success: false
      });
    });
});

router.post("/login", function(req, res) {
  /**
   * TODO: Implement authentication using email as well
   */

  let username = req.body.username;
  let password = req.body.password;

  User.findOne({ username: username })
    .then(function(user) {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      console.log(user);
      user.verifyPassword(password, function(err, status) {
        let token = generateToken(user);
        res.locals.user = user;
        res.locals.authenticated = true;

        return res.json({
          success: true,
          token: token,
          message: "Enjoy your token"
        });
      });
    })
    .catch(err => {
      res.status(500).json({ success: false, message: err });
    });
});

router.get("/authenticatetoken", function(req, res, next) {
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(401).json({ success: false, message: "No token found" });
  }

  // Check token that was passed by decoding token using secret
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).json({ success: false, message: err });
    //return user using the id from w/in JWTToken
    User.findById(
      {
        id: decoded.id
      },
      function(err, user) {
        if (err) return res.status(500).json({ success: false, message: err });
        res.locals.user = user;
        res.locals.authenticated = true;
        var token1=generateToken(user)
        return res.status(200).json({ success: true, message: "Valid token", token:token1 });
      }
    );
  });
});

module.exports = router;
