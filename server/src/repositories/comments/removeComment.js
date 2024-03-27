const getDb = require("../../database/getDb");

const removeComment = async (id) => {
  const pool = getDb();
  await pool.query("DELETE FROM comments WHERE id = ?", [id]);
};
module.exports = removeComment;
