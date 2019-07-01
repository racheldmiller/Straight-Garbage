// ===================================
//  DEPENDENCIES & CONFIGS
// ===================================

var express = require("express");
var connection = require("./config/connection");

var PORT = process.env.PORT || 8080;

var app = express();

var exphbs = require("express-handlebars");

// Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===================================
//  SERVE STATIC FILES & ROUTES, EXPORTS
// ===================================
//in a folder called handlebars and in a page called main
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//grabbing the files and data public folder
// see the main.handlebars template to reflect its use:
app.use(express.static("public"));

// Import routes
var routes = require("./controllers/garbageControllers.js");
// give the server access to routes
app.use("/", routes);

// Randall, I'm not sure if this is accurate, as I noticed you are using app.use as opposed to app.get here are the links to the pages using app.get

// app.get("/", (req, res) => {
// res.render('index', { title: 'Home' } );
//});


// app.get("/about", (req, res) => {
// res.render('about', { title: 'About' } );
//});

// app.get("/contact", (req, res) => {
// res.render('contact', { title: 'Contact' } );
//});

// app.get("/about", (req, res) => {
// res.render('about', { title: 'About' } );
//})

// app.get("/disposeLocForm", (req, res) => {
// res.render('disposeLocForm', { title: 'Disposal Location Form' } );
//});

// ===================================
//  LISTENERS
// ===================================

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("You're connected as id " + connection.threadId);

  app.listen(PORT, function() {
    console.log("Your app is connected to http://localhost:", PORT);
  });
});
