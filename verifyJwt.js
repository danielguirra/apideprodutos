const jwt = require("jsonwebtoken");

function verifyJwt(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: "Token não informado" });
  jwt.verify(token, "daniel", (err, decoded) => {
    if (err) return res.send("Erro no token");
    req.userId = decoded.UserId;
    next();
  });
}
exports.verifyJwt = verifyJwt;
