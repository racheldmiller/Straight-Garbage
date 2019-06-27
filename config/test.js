// just seeing what information we get from the API key
//line 3 is for a testing environment, remove beofre app use
require("dotenv").config();
console.log(process.env);
var axios = require("axios");

axios
  .get(
    "http://api.earth911.com/earth911.getMaterials?api_key=" +
      process.env.EARTH911
  )
  .then(function(response) {
    // reference Randall's code
    console.log(response.data.result[0]);
  });

//move this to public>>garbage.js
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
  });
