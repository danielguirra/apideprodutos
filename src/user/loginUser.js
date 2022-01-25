const { connection } = require("../../database/index");
const jwt = require("jsonwebtoken");
async function loginUser(user, res) {
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  try {
    connection.query(sql, [user.email, user.password], (err, result) => {
      if (err) {
        res.json(err);
      }
      if (!result[0]) {
        res.json({ message: "Verifique os campos" });
      } else {
        if (result[0].Password === user.password) {
          const token = jwt.sign({ UserId: result[0].ID }, "daniel", {
            expiresIn: 3000,
          });
          res.json({ auth: true, token });
        }
      }
    });
  } catch (error) {
    return error;
  }
}

module.exports = { loginUser };
