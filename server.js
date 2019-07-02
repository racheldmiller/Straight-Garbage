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

// ===================================
//  LISTENERS
// ===================================

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("You're connected as id " + connection.threadId);

//   app.listen(PORT, function() {
//     console.log("Your app is connected to http://localhost:", PORT);
//   });
// });
app.listen(PORT, function() {
  console.log("Server listening: ", PORT);
});
