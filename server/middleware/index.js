var middleware = {};
let jwt = require("jsonwebtoken");
let config = require("../config");
middleware.isLoggedIn = function(req, res, next) {
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(401).json({ success: false, message: "No token found" });
  }
  if (isAuthenticated(req, res, next)) {
    return next();
  }
  res.status(403).json({
    message: "Please login first",
    success: false
  });
};

function isAuthenticated(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;
  if (!token) {
    return false;
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
        return true;
      }
    );
  });
}
