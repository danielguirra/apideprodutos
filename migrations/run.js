const { connection } = require("../database/index");

const { createTableProducts } = require("./products");
const { createTableUsers } = require("./users");
const { createTableCategory } = require("./category");
const { createTableProductCategorys } = require("./productsCategory");
const { createTableProductImages } = require("./image");

createTableProducts(connection);
createTableUsers(connection);
createTableCategory(connection);
createTableProductCategorys(connection);
createTableProductImages(connection);
