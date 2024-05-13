const getDb = require("../../database/getDb");

const deleteUserById = async (id) => {
  const pool = getDb();

  await pool.query("DELETE FROM comments WHERE userId = ?", [id]);
  await pool.query("DELETE FROM fav WHERE userId = ?", [id]);
  await pool.query("DELETE FROM plants WHERE userId = ?", [id]);
  await pool.query("DELETE FROM users WHERE id = ?", [id]);
};

module.exports = deleteUserById;
