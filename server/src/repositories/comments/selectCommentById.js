const getDb = require("../../database/getDb");

const selectCommentById = async (id) => {
  const pool = getDb();
  const [comment] = await pool.query("SELECT * FROM comments WHERE id = ?", [
    id,
  ]);
  return comment;
};
module.exports = selectCommentById;
