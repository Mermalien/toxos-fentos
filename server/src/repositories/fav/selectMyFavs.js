const getDb = require("../../database/getDb");

const selectMyFavs = async (userId) => {
  const pool = getDb();
  const [myFavs] = await pool.query(
    `SELECT * FROM fav f INNER JOIN plants ON f.plantId = plants.id WHERE f.userId = ?`,
    [userId]
  );
  return myFavs;
};
module.exports = selectMyFavs;
