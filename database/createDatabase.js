const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DATABASEHOST || "localhost",
  user: process.env.DATABASEUSER || "root",
  password: process.env.DATABASEPASSWORD || "root",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("CONECTADO!");
  con.query("CREATE DATABASE eva", function (err, result) {
    if (err) throw err;
    console.log("Banco criado");
  });
});
