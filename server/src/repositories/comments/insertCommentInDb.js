const getDb = require("../../database/getDb");

const insertCommentInDb = async (userId, plantId, text) => {
  const pool = getDb();
  const [{ comment }] = await pool.query(
    "INSERT INTO comments (userId, plantId, text) VALUES (?, ?, ?)",
    [userId, plantId, text]
  );
  return comment;
};
module.exports = insertCommentInDb;
