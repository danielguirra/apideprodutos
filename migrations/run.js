const { connection } = require("../database/index");

const { createTableProducts } = require("./products");
const { createTableUsers } = require("./users");
const { createTableCategory } = require("./category");

createTableProducts(connection);
createTableUsers(connection);
createTableCategory(connection);
