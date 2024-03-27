const getDb = require("../../database/getDb");

const selectFavById = async (plantId, userId) => {
  const pool = getDb();
  const [[fav]] = await pool.query(
    "SELECT * FROM fav WHERE plantId = ? AND userId = ?",
    [plantId, userId]
  );
  return fav;
};
module.exports = selectFavById;
