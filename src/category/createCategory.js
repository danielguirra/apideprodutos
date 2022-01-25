const { connection } = require("../../database/index");
const jwt = require("jsonwebtoken");
function createCategory(category, res, req) {
  const sql = " SELECT * FROM categorys WHERE Nome = ?";

  connection.query(sql, [category.nome], function (error, results, fields) {
    if (error) return console.log(error);
    const sql = "INSERT INTO categorys(Nome) VALUES ?";
    const values = [[category.nome]];
    connection.query(sql, [values], function (error, results, fields) {
      if (error) return res.send(error.sqlMessage);
      const token = req.headers["x-access-token"];
      if (!token)
        return res
          .status(401)
          .send({ auth: false, message: "Token não informado" });
      jwt.verify(token, "daniel", (err, decoded) => {
        if (err) return res.send("Erro no token");
        return res.send(`Foi criado a categoria ${category.nome}`);
        res.end();
      });
    });
  });
}

module.exports = { createCategory };
