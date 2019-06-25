// just seeing what information we get from the API key

var axios = require("axios");

axios
  .get("http://api.earth911.com/earth911.getMaterials?api_key=6ee9222b20473f36")
  .then(function(response) {
    console.log(response.data.result[0]);
  });

axios
  .get(
    "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCMTmEzVKPWnYwOd0XQuF5whyAZQ3JlZG8"
  )
  .then(function(response) {
    console.log("************");
    var lat = response.data.results[0].geometry.location.lat;
    console.log("This is the lat: ", lat);
    var long = response.data.results[0].geometry.location.lng;
    console.log("This is the longitude: ", long);
    console.log("************");
  });
