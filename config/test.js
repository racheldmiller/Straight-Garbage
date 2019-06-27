// just seeing what information we get from the API key
//line 3 is for a testing environment, remove beofre app use
require('dotenv').config();
console.log(process.env);
var axios = require("axios");

axios
<<<<<<< HEAD
  .get(
    "http://api.earth911.com/earth911.getMaterials?api_key=" +
      process.env.EARTH911
  )
  .then(function(response) {
    // reference Randall's code
    console.log(response.data.result[0]);
=======
  .get("http://api.earth911.com/earth911.getMaterials?api_key=" + process.env.EARTH911)
  .then(function(response) {
    console.log(response.data.result);
// type----description
// description---- long description
// image--- image
// materialid---- material_id
>>>>>>> 392201577eaa76520b762b907b5d230e05e2bdfa
  });

//move this to public>>garbage.js
axios
  .get(
<<<<<<< HEAD
    "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" +
      process.env.GOOGLE
=======
    "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + process.env.GOOGLE
>>>>>>> 392201577eaa76520b762b907b5d230e05e2bdfa
  )
  .then(function(response) {
    console.log("************");
    var lat = response.data.results[0].geometry.location.lat;
    console.log("This is the lat: ", lat);
    var long = response.data.results[0].geometry.location.lng;
    console.log("This is the longitude: ", long);
    console.log("************");
  });
