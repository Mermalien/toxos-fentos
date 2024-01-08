const getDb = require("../../database/getDb");

const addFav = async (userId, plantId) => {
  const pool = getDb();

  const [{ insertFav }] = await pool.query(
    "INSERT INTO fav (userId, plantId) VALUES (?, ?)",
    [userId, plantId]
  );
  return insertFav;
};

module.exports = addFav;
