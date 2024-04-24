const bcrypt = require("bcrypt");

const {
  selectUserByEmail,
  insertUserInDb,
} = require("../../repositories/users");
const { createUserSchema } = require("../../schemas/users");
const {
  generateError,
  validateSchema,
  saveImg,
  sendMail,
} = require("../../utils");

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, bio } = req.body;
    await validateSchema(createUserSchema, req.body);

    const alreadyExist = await selectUserByEmail(email);
    if (alreadyExist) {
      generateError(
        "Esa dirección ya está registrada en nuestra base de datos",
        400
      );
    }

    let avatarName;
    if (req.files?.avatar) {
      avatarName = await saveImg(req.files.avatar.data, 150);
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const insertUser = await insertUserInDb({
      name,
      email,
      encryptedPassword,
      bio,
      avatarName,
    });

    await sendMail(
      "Bienvenido a Toxos&Fentos!",
      `<p>Gracias por registrarte, nos alegra mucho tenerte por aquí.</p> <a href="http://localhost:3001/login">Inicia sesión para comenzar.</a>`,
      email
    );
    res.status(201).send({
      status: "Registro exitoso",
      data: { id: insertUser, name, email, bio, avatar: avatarName },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
