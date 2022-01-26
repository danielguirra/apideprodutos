function fakerUsers(conn) {
  const sql =
    "INSERT INTO Products(Nome,Descrição,Preço,idCategoria,idUserCreator,Image1,Image2,Image3,Image4,Image5) VALUES ?";
  const values = [
    ["teste1", "teste1", "1", 1, 1, "346758.jpg"],
    ["teste2", "teste1", "1", 1, 1, "346758.jpg"],
    ["teste3", "teste1", "1", 1, 1, "346758.jpg"],
  ];
  conn.query(sql, [values], function (error, results, fields) {
    if (error) return console.log(error);
    console.log("adicionou produtos! ");
  });
}

const { connection } = require("../database/index");
fakerUsers(connection);
