const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginUserSchema } = require("../../schemas/users");
const { validateSchema, generateError } = require("../../utils");
const { selectUserByEmail } = require("../../repositories/users");

const loginUser = async (req, res, next) => {
  try {
    await validateSchema(loginUserSchema, req.body);
    const { email, password } = req.body;

    const user = await selectUserByEmail(email);
    if (!user) {
      generateError("El usuario no existe", 404);
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      generateError("email o contraseña incorrectos", 400);
    }

    const tokenPayload = { id: user.id };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.send({ status: "Sesión iniciada", data: { token } });
  } catch (error) {
    next(error);
  }
};
module.exports = loginUser;
