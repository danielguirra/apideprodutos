const { connection } = require("../../database/index");
function createProducts(product, user, image) {
  const sql =
    "INSERT INTO Products(Nome,Descrição,Preço,idCategoria,idUserCreator,Image1,Image2,Image3,Image4,Image5) VALUES ?";
  const values = [
    [
      product.nome,
      product.descricao,
      product.preco,
      product.categoria,
      user,
      image[0],
      image[1],
      image[2],
      image[3],
      image[4],
    ],
  ];
  connection.query(sql, [values], function (error, results, fields) {
    if (error) return console.log(error);
    console.log("Foi adcionado o Produto! ");
  });
}

module.exports = { createProducts };
