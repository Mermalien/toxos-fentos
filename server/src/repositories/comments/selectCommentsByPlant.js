const getDb = require("../../database/getDb");

const selectCommentsByPlant = async (plantId) => {
  const pool = getDb();
  const [commentsInPlant] = await pool.query(
    "SELECT c.*, u.name, u.avatar FROM comments c LEFT JOIN users u ON c.userId = u.id  WHERE c.plantId = ?",
    [plantId]
  );
  return commentsInPlant;
};
module.exports = selectCommentsByPlant;
