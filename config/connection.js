// handles the connection/login info for the database, holds method for starting connection

// Set up MySQL connection
const mysql = require("mysql");
const Sequelize = require("sequelize");

let connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "password",
  database: "recyclethis_db"
});

// Make the connection
// let connection = mysql.createConnection({

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  // app.listen(PORT, function() {
  //   console.log("Your app is connected to http://localhost:", PORT);
  // });
});

// Export connection for our ORM to use.
module.exports = connection;

const sequelize = new Sequelize("recyclethis_db", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;

// Make the connection
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("You're connected as id " + connection.threadId);
// });
