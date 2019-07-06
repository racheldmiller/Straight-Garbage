// Import MySQL connection.

// var connection = require("./connection");

// // =========================
// // BOILER PLATES FOR ?'s and SQL CONVERSIONS
// // =========================

// // Boiler plate that calculates the use of question marks
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Boiler plate that converts object key/val pairs to sql syntax
// function objToSql(ob) {
//   var arr = [];
//   for (var key in ob) {
//     var value = ob[key];

//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }

//       arr.push(key + "=" + value);
//     }
//   }

//   return arr.toString();
// }

// // =========================
// // ORM
// // =========================
// // Object for all our SQL statement functions. (CRU: create, read, update)
// var orm = {
//   selectAll: function(materials, callback) {
//     var queryString = "SELECT * FROM " + materials + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       callback(result);
//     });
//   },

//   create: function(table, cols, vals, callback) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       callback(result);
//     });
//   },

//   find: function(tableInput, id, cb) {
//     var queryString = "SELECT * FROM " + tableInput;

//     queryString += "WHERE";
//     queryString += "?";
//     console.log(queryString);
//   }
// };

// // Export the orm object for the model (garbage.js).
// module.exports = orm;
