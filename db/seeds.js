require("dotenv").config();
var axios = require("axios");

// -- sql code to run to fill the table, optional. Best use is if you have dummy data that you want to test.

const connection = require("../config/connection");

// connect to mysql
const mysql = require("mysql");

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("You're connected as id " + connection.threadId);

  axios
    .get(
      "http://api.earth911.com/earth911.getMaterials?api_key=" +
        process.env.EARTH911
    )
    .then(function(response) {
      console.log(response.data);
      //   console.log("description :", response.data.result[0].long_description);
      //   console.log("image :", response.data.result.image);
      //   console.log("materialID :", response.data.result.material_id);
    });

  // create a for loop to loop through each of the results
  // store the results into the database
  // for (i = 0; i < response.length; i++) {
  //   var response = response.length;
  // }

  // type----description
  // description---- long description
  // image--- image
  // materialid---- material_id

  //   api call
  // get the data and save to db
});
