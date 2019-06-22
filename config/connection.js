// handles the connection/login info for the database, holds method for starting connection

const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "something_db"
  // need to rename database to match whatever we name our actual database
});

connection.connect();

module.exports = connection;
