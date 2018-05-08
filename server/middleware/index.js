var middleware = {};
middleware.isLoggedIn = function() {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json({
    message: "Please login first",
    success: false
  });
};
