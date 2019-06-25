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

router.get('/landing', function (req, res) {
    //res.JSON like console.log to display a message to the screen that the page works
    // res.json("Route for / works")
    res.render('index', {
        title: "Landing",
        style: "style.css"
    })
})

router.post('/results', function(req, res) {
    //grabs the submit button and pushes user input to generate results
})





// ===================================
//  EXPORT
// ===================================
module.exports = router;