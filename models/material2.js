var axios = require("axios");
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("You're connected as id " + connection.threadId);

  axios
    .get(
      "http://api.earth911.com/earth911.searchLocations?latitude=" +
        latitude +
        "&longitude=" +
        longitude +
        "&max_distance=" +
        max_distance +
        "&api_key=6ee9222b20473f36"
    )
    .then(function(response) {
      console.log(response.data);
      var description = [];
      var distance = [];
      var location_id = [];
      for (i < 0; i < response.length; i++) {
        console.log(response.data[i]);
      }
    });
});

var latitude = 33.67;
var longitude = -112.84;

var max_distance = 25;
