require("dotenv").config();
var axios = require("axios");

// -- sql code to run to fill the table, optional. Best use is if you have dummy data that you want to test.

let sequelize = require("sequelize");

var connection2 = require("../config/connection");
// console.log(connection2);

const Material = require("../models/material");

// connect to mysql
const mysql = require("mysql");
console.log("testing");

connection2
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
    axios
      .get(
        "http://api.earth911.com/earth911.getMaterials?api_key=6ee9222b20473f36"
      )
      .then(function(response) {
        let promiseArray = [];
        response.data.result.map(result => {
          // console.log(result);
          promiseArray.push(
            Material.create({
              type: result.description,
              description: result.long_description,
              image: result.image,
              materialID: result.material_id
            })
          );
        });
        // sequelize
        //   .transaction(() => {
        //     console.log("sequelize function working");
        //     return Promise.all(promiseArray);
        //   })
        // .then(() => {
        //   console.log("we have all the data");
        // });
      });
  })
  .catch(err => {
    console.error("Unable to connect to the database", err);
  });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("You're connected as id " + connection.threadId);

//   axios
//     .get(
//       "http://api.earth911.com/earth911.getMaterials?api_key=" +
//         process.env.EARTH911
//     )
//     .then(function(response) {
//       console.log(response.data.result[0]);
//       //   console.log("description :", response.data.result[0].long_description);
//       //   console.log("image :", response.data.result.image);
//       //   console.log("materialID :", response.data.result.material_id);
//     });

//   // create a for loop to loop through each of the results
//   // store the results into the database
//   // for (i = 0; i < response.data.result.length; i++) {
//   //   var response = response.data.result;
//   // }

//   // type----description
//   // description---- long description
//   // image--- image
//   // materialid---- material_id

//   //   api call
//   // get the data and save to db
// });
