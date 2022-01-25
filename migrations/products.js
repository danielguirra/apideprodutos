function createTableProducts(conn) {
  const sql =
    "CREATE TABLE IF NOT EXISTS Products (" +
    "ID int NOT NULL AUTO_INCREMENT," +
    "Nome varchar(150) NOT NULL," +
    "Descrição varchar(150) NOT NULL," +
    "Preço varchar(10) NOT NULL," +
    "idCategoria int(10) NOT NULL REFERENCES `id`(`Categorys`) ," +
    "idUserCreator int(10) NOT NULL REFERENCES `id`(`Users`) ," +
    "Image1 varchar(150) NOT NULL ," +
    "Image2 varchar(150)," +
    "Image3 varchar(150)," +
    "Image4 varchar(150)," +
    "Image5 varchar(150)," +
    "PRIMARY KEY (ID)" +
    ");";

  conn.query(sql, function (error, results, fields) {
    if (error) return console.log(error);
    console.log("criou a tabela Products!");
  });
}
module.exports = { createTableProducts };
