// declares all routes and what logic should run if URL matches (GET, POST, PUT, DELETE),
//       touches model, figures out what view to render
// Export routes for server.js to use.

// ===================================
//  DEPENDENCIES & CONFIGS
// ===================================

var express = require("express");

var router = express.Router();

var garbage = require("../models/garbage.js");

// ===================================
//  ROUTES
// ===================================

//***** Landing Page *******//

router.get("/", function(req, res) {
  //res.JSON like console.log to display a message to the screen that the page works
  // res.json("Route for / works")
  // console.log('Helloooooo')
  res.render("index", {
    title: "Landing",
    style: "style.css",
    typesOfGarabage: []
  });
});

//***** Landing Page *******//
router.get("/results", function(req, res) {
  console.log(req.query);
  res.render("results", {
    title: "Results",
    style: "style.css"
  });
  //API
});

// ===================================
//  EXPORT
// ===================================
module.exports = router;
