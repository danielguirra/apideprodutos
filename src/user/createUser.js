const { connection } = require("../../database/index");

function createUsers(user) {
  const sql = "INSERT INTO Users(Nome,Email,Password) VALUES ?";
  const values = [[user.name, user.email, user.password]];
  connection.query(sql, [values], function (error, results, fields) {
    if (error) return console.log(error);
    console.log("Foi adcionado o usuário! ");
  });
}

module.exports = { createUsers };
