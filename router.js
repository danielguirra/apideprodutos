const express = require("express");
const multer = require("multer");
const path = require("path");
const { createUsers } = require("./src/user/createUser");
const { loginUser } = require("./src/user/loginUser");
const { verifyJwt } = require("./verifyJwt");
const { createProducts } = require("./src/products/createProducts");
const { getProducts } = require("./src/products/getProducts");
const { deleteProducts } = require("./src/products/deleteProducts");
const { updateProducts } = require("./src/products/updateProducts");
const { createCategory } = require("./src/category/createCategory");
const {
  getProductsFromCategory,
} = require("./src/category/getProductsFromCategory");
const { getProductsFromPrice } = require("./src/category/getProductsFromPrice");
const jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/data/image");
  },
  filename: (req, file, cb) => {
    const { name, ext } = path.parse(file.originalname);

    cb(null, `${name}${ext}`);
  },
});

const upload = multer({ storage });

const router = express.Router();
exports.router = router;

router.get("/", (req, res) => res.json({ message: "Api funcionando" }));

router.get("/produto", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: "Token não informado" });
  jwt.verify(token, "daniel", (err, decoded) => {
    if (err) return res.send("Erro no token");
    return getProducts(decoded.UserId, res);
  });
});

router.delete("/produto/:id", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: "Token não informado" });
  jwt.verify(token, "daniel", (err, decoded) => {
    if (err) return res.send("Erro no token");
    return deleteProducts(req.params.id, decoded.UserId, res);
  });
});

router.put("/produto/:id", (req, res) => {
  if (req.body) {
    let produto = {
      nome: req.body.nome,
      descricao: req.body.descricao,
      preco: req.body.preco,
      categoria: req.body.categoria,
    };
    const token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(401)
        .send({ auth: false, message: "Token não informado" });
    jwt.verify(token, "daniel", (err, decoded) => {
      if (err) return res.send("Erro no token");
      return updateProducts(req.params.id, produto, decoded.UserId, res);
    });
  }
});

router.post("/produto", verifyJwt, upload.array("file", 5), (req, res) => {
  if (!req.files[0]) {
    res.send("Verifique se existe imagem anexada");
  }
  if (req.body) {
    let product = {
      nome: req.body.nome,
      descricao: req.body.descricao,
      preco: req.body.preco,
      categoria: req.body.categoria,
    };
    let c = 0;
    let image = [];
    while (c < req.files.length) {
      image.push(req.files[c].originalname);
      c++;
    }
    const token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(401)
        .send({ auth: false, message: "Token não informado" });
    jwt.verify(token, "daniel", (err, decoded) => {
      if (err) return res.send("Erro no token");
      createProducts(product, decoded.UserId, image, res);
      res.end();
    });
  }
});

router.post("/registro", (req, res) => {
  if (req.body) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    createUsers(user);
    return res.json({ message: "Usuário criado", user });
  }
});

router.post("/login", (req, res) => {
  if (req.body) {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    loginUser(user, res);
  }
});

router.post("/categoria", (req, res) => {
  if (req.body) {
    let categoria = {
      nome: req.body.nome,
    };
    createCategory(categoria, res, req);
  }
});

router.get("/categoria", (req, res) => {
  if (req.body) {
    let categoria = {
      nome: req.body.nome,
    };
    getProductsFromCategory(categoria, res, req);
  }
});

router.get("/preco/", (req, res) => {
  getProductsFromPrice(res, req);
});
