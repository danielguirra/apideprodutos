const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DATABASEHOST,
  user: process.env.DATABASEUSER,
  password: process.env.DATABASEPORT,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("CONECTADO!");
  con.query("CREATE DATABASE eva", function (err, result) {
    if (err) throw err;
    console.log("Banco criado");
  });
});
