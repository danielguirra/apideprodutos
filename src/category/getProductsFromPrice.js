const { connection } = require("../../database/index");
function getProductsFromPrice(res, req) {
  const sql =
    " SELECT Nome,Descrição,Preço,idCategoria,Image1,Image2,Image3,Image4,Image5 FROM products ORDER BY preço";

  connection.query(sql, function (error, results, fields) {
    if (error) return console.log(error);

    res.send(results);
  });
}

module.exports = { getProductsFromPrice };
