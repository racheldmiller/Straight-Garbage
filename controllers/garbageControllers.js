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
    title: "Home Page",
    style: "style.css",
  });
  
});

//***** About Page *******//
router.get('/about', function(req, res) {
  res.render('about', {
    title: "About",
    style: "style.css" 
  })
});

//***** Contact Page *******//
router.get('/contact', function(req, res) {
  res.render('contact', {
    title: "Contact Us",
    style: "style.css" 
  })
});

//***** Results Page *******//
router.get("/disposallocations", function(req, res) {
  // {stuff} signals the handlebars engine
  res.render("disposeLocForm", {
    title: "Disposal Locations Form",
    style: "style.css",
    materials: [
      "Chip Bags id106",
      "Metal Springs From Pumps id282",
      "Plastic Caps id10 and 27",
      "Toothbrushes 338",
      "Waxed Cardboard 358",
      "Plastic Bags 2 8 16 20 25 33 42"
    ]
  });
});

// Input received from form in disposeLocForm.hbs
router.post('/disposallocations', function (req, res) {
  var addressInput = req.body;
  console.log("garbageController.js, ln 63: Address input from user: ", req.body);
  res.redirect('/disposallocationresults')
})

router.get('/disposallocationresults', function (req, res) {
  res.render('disposedLocationResults', {
    title: 'Results',
    style: 'style.css'
  })
})

//***** Test Page *******//
router.get("/sgtestmode", function (req, res) {
  res.render("test_results")
})

router.post('/sgtestmode', function (req, res) {
  var addressInput = req.body;
  console.log("garbageController.js, ln 63: Address input from user: ", req.body);
  res.redirect('/sgtestmode')
})

// ===================================
//  EXPORT
// ===================================
module.exports = router;
