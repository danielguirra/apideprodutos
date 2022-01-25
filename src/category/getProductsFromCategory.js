const { connection } = require("../../database/index");
function getProductsFromCategory(categoria, res) {
  const sql = " SELECT * FROM categorys WHERE Nome = ?";

  connection.query(sql, [categoria.nome], function (error, results, fields) {
    if (error) return console.log(error);
    if (results[0].ID) {
      const sql2 =
        " SELECT Nome,Descrição,Preço,idCategoria,Image1,Image2,Image3,Image4,Image5 FROM products WHERE idCategoria = ? ";
      connection.query(
        sql2,
        [results[0].ID],
        function (error, results, fields) {
          if (error) return console.log(error);
          res.send(results);
        }
      );
    }
  });
}

module.exports = { getProductsFromCategory };
