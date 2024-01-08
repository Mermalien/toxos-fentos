const getDb = require("../../database/getDb");

const deletePlantById = async (plantId) => {
  const pool = getDb();
  await pool.query("DELETE FROM fav WHERE plantId = ?", [plantId]);
  await pool.query("DELETE FROM plants WHERE id = ?", [plantId]);
};

module.exports = deletePlantById;
