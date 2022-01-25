function createTableUsers(conn) {
  const sql =
    "CREATE TABLE IF NOT EXISTS Users (" +
    "ID int NOT NULL AUTO_INCREMENT," +
    "Nome varchar(150) NOT NULL," +
    "Email varchar(50) NOT NULL," +
    "Password varchar(50) NOT NULL," +
    "PRIMARY KEY (ID)" +
    ");";

  conn.query(sql, function (error, results, fields) {
    if (error) return console.log(error);
    console.log("criou a tabela! Users");
  });
}
module.exports = { createTableUsers };
