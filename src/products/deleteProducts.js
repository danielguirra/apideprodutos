const { connection } = require("../../database/index");
function deleteProducts(productId, user, res) {
  const sql = "DELETE FROM products WHERE ID = ? AND idUserCreator = ?";

  connection.query(sql, [productId, user], function (error, results, fields) {
    if (error) return console.log(error);
    if (results.changedRows <= 0) {
      res.send(`O produto com ID: ${productId} não está acessivel`);
      res.end();
    }
    res.send(`O produto com ID: ${productId} foi deletado`);
    res.end();
  });
}

module.exports = { deleteProducts };
