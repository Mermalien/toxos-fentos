const getDb = require("../../database/getDb");

const selectPlantImage = async (plantId) => {
  const pool = getDb();

  const [plantImage] = await pool.query(
    "SELECT image FROM plants WHERE id = ?",
    [plantId]
  );
  return plantImage;
};
module.exports = selectPlantImage;
