const jwt = require("jsonwebtoken");
const { generateError } = require("../utils");

const validateAuth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      generateError("Autorización inválida", 400);
    }

    const [type, token] = authorization.split(" ");
    if (type !== "Bearer" || !token) {
      generateError("Token inválido", 400);
    }
    const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = tokenPayload;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateAuth;
