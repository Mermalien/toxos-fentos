const bcrypt = require("bcrypt");
const {
  updateUserById,
  selectUserById,
  updateAvatar,
} = require("../../repositories/users");
const { updateUserSchema } = require("../../schemas/users");
const { validateSchema, saveImg } = require("../../utils");

const updateUserData = async (req, res, next) => {
  try {
    const user = await selectUserById(req.auth.id);
    const data = req.body;
    const newAvatar = req.files;

    await validateSchema(updateUserSchema, data);

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    if (req.files?.avatar) {
      const savedImg = await saveImg(req.files.avatar.data, 150);
      await updateAvatar(req.auth.id, savedImg);

      res.status(201).send({
        status: "Actualizado correctamente",
        data: newAvatar,
      });
    }
    await updateUserById(req.auth.id, data);
    res.status(201).send({
      status: "Actualizado correctamente",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserData;
