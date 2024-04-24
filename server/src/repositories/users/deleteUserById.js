const getDb = require("../../database/getDb");

const deleteUserById = async (id) => {
  const pool = getDb();

  // Eliminar registros relacionados en la tabla `fav`
  await pool.query("DELETE FROM fav WHERE userId = ?", [id]);

  // Eliminar registros relacionados en la tabla `comments`
  await pool.query("DELETE FROM comments WHERE userId = ?", [id]);

  // Eliminar registros relacionados en la tabla `plants`
  await pool.query("DELETE FROM plants WHERE userId = ?", [id]);

  // Finalmente, eliminar el usuario
  await pool.query("DELETE FROM users WHERE id = ?", [id]);
};

module.exports = deleteUserById;
