const getDb = require("../../database/getDb");

const selectPlantByUserId = async (userId) => {
  const pool = getDb();
  const [userPlants] = await pool.query(
    "SELECT * FROM plants WHERE userId = ?",
    [userId]
  );
  return [userPlants];
};
module.exports = selectPlantByUserId;
