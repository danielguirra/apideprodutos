const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createConnection({
  host: process.env.DATABASEHOST,
  port: process.env.DATABASEPORT,
  user: process.env.DATABASEUSER,
  password: process.env.DATABASEPASSWORD,
  database: process.env.DATABASENAME,
});

connection.connect(function (err) {
  if (err) return console.log(err);
  console.log("conectou!");
});

module.exports = { connection };
