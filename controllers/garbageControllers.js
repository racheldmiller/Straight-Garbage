// declares all routes and what logic should run if URL matches (GET, POST, PUT, DELETE),
//       touches model, figures out what view to render
// Export routes for server.js to use.

// ===================================
//  DEPENDENCIES & CONFIGS
// ===================================
//for earth911 and google api
require("dotenv").config();
var axios = require("axios");

//for server
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

//***** Results Page *******//
router.get("/results/:postalCode", function(req, res) {
  console.log(req.query);
  // {stuff} signals the handlebars engine
  res.render("disposeLocForm", {
    title: "Results",
    style: "style.css",
    //sends parameter via url
    //the postal code key is the handlebars variable in whereButton.hbs/result.hbs
    postalCode: req.params.postalCode
  });
});

router.post("/results/postalCode", function(req, res) {
  // sends param postal code via POST method within the submit form to render onto the page using req.body
  var postalCodeParam = req.body.postalCode;
  res.redirect("/results/" + postalCodeParam);
});

// ===================================
//  EXPORT
// ===================================
module.exports = router;
