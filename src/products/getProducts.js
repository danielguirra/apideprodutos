const { connection } = require("../../database/index");
function getProducts(user, res) {
  const sql = "SELECT * FROM products WHERE idUserCreator = ? ";

  connection.query(sql, [user], function (error, results, fields) {
    if (error) return console.log(error);
    res.send(results);
  });
}

module.exports = { getProducts };
