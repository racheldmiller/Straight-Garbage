// handles the connection/login info for the database, holds method for starting connection

// Set up MySQL connection
const mysql = require("mysql");
const Sequelize = require("sequelize");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "recyclethis_db"
});

// Make the connection
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("You're connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
module.exports = connection;

const sequelize = new Sequelize("recyclethis_db", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
