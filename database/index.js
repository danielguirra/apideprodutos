const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createConnection({
  host: process.env.DATABASEHOST || "localhost",
  port: process.env.DATABASEPORT || "3306",
  user: process.env.DATABASEUSER || "root",
  password: process.env.DATABASEPASSWORD || "root",
  database: process.env.DATABASENAME || "eva",
});

connection.connect(function (err) {
  if (err) return console.log(err);
  console.log("conectou!");
});

module.exports = { connection };
