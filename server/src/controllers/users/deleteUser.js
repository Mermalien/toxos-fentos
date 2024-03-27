const bcrypt = require("bcrypt");
const { validateSchema, generateError } = require("../../utils");
const { deleteUserSchema } = require("../../schemas/users");
const { selectUserById, deleteUserById } = require("../../repositories/users");

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;
    const user = await selectUserById(id);
    const encryptedPass = user.password;

    if (!user) {
      generateError("El usuario que quieres eliminar no existe", 404);
    }
    // Comparamos que la contraseña enviada por el usuario coincida con la que hay en la bbdd previamente encriptada
    const validPass = await bcrypt.compare(password, encryptedPass);
    if (!validPass || email !== user.email) {
      generateError("Email o contraseña inválidos", 401);
    }

    await validateSchema(deleteUserSchema, req.body);
    await deleteUserById(id);
    res.send({
      status: "Eliminado correctamente",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
