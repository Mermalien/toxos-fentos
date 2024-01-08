const getDb = require("../../database/getDb");

const selectPlantById = async (plantId) => {
  const pool = getDb();

  const [[plant]] = await pool.query(
    "SELECT p.*, COUNT(f.id) AS fav FROM plants p LEFT JOIN fav f ON p.id = f.plantId WHERE p.id = ? GROUP BY p.id",
    [plantId]
  );

  return plant;
};
module.exports = selectPlantById;
