function fakerUsers(conn) {
  const sql = "INSERT INTO Users(Nome,Email,Password) VALUES ?";
  const values = [
    ["teste1", "teste1@teste1.com", "1234"],
    ["teste2", "teste2@teste2.com", "1234"],
    ["teste3", "teste3@teste3.com", "1234"],
  ];
  conn.query(sql, [values], function (error, results, fields) {
    if (error) return console.log(error);
    console.log("adicionou usuários! ");
  });
}

const { connection } = require("../database/index");
fakerUsers(connection);
