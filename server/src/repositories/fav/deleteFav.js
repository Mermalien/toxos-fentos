const getDb = require("../../database/getDb");

const deleteFav = async (userId, plantId) => {
  const pool = getDb();
  await pool.query("DELETE FROM fav WHERE userId = ? AND plantId = ?", [
    userId,
    plantId,
  ]);
};

module.exports = deleteFav;
