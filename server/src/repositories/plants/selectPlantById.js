const getDb = require("../../database/getDb");

const selectPlantById = async (plantId) => {
  const pool = getDb();

  const [[plant]] = await pool.query(
    "SELECT p.*, COUNT(f.id) AS fav, COUNT(c.id) AS comments FROM plants p LEFT JOIN fav f ON p.id = f.plantId LEFT JOIN comments c ON p.id = c.plantId WHERE p.id = ? GROUP BY p.id",
    [plantId]
  );

  return plant;
};
module.exports = selectPlantById;
