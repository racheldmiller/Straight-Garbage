// just seeing what information we get from the API key

var queryURL =
  "http://api.earth911.com/" +
  +"earth911.getMaterials?api_key=" +
  "6ee9222b20473f36";

// make the AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
