const { connection } = require("../../database/index");
function getProducts(productId, user, res) {
  const sql = "SELECT * FROM products WHERE idUserCreator = ? AND ID = ? ";

  connection.query(sql, [user, productId], function (error, results, fields) {
    if (error) return console.log(error);
    res.send(results);
  });
}

module.exports = { getProducts };
