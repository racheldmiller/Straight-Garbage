// handles the connection/login info for the database, holds method for starting connection

// Set up MySQL connection
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "password",
  database: "recycleThis_db"
  // ** this is a temporary database name **
});

// Make the connection
connection.connect(function(err) {
  if (err) {
    console.error("Uh-oh, error connecting: " + err.stack);
    return;
  }
  console.log("You're connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
