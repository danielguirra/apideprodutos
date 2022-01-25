function createTableCategory(conn) {
  const sql =
    "CREATE TABLE IF NOT EXISTS Categorys (" +
    "ID int NOT NULL AUTO_INCREMENT," +
    "Nome varchar(150) NOT NULL UNIQUE," +
    "PRIMARY KEY (ID)" +
    ");";

  conn.query(sql, function (error, results, fields) {
    if (error) return console.log(error);
    console.log("criou a tabela! Categorys");
  });
}
module.exports = { createTableCategory };
