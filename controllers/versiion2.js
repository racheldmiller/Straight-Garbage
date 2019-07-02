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
  res.render("results", {
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

//API for google locations
function getCoord() {
  axios
    .get(
      "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" +
        process.env.GOOGLE
    )
    .then(function(response) {
      console.log("************");
      var lat = response.data.results[0].geometry.location.lat;
      console.log("This is the lat: ", lat);
      var long = response.data.results[0].geometry.location.lng;
      console.log("This is the longitude: ", long);
      console.log("************");

      res.json(lat, lng);
    });
}

// ===================================
//  EXPORT
// ===================================
module.exports = router;
