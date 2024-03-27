const getDb = require("../../database/getDb");

const updatePlantImage = async (newData, plantId) => {
  const pool = getDb();
  const [[updatedImage]] = await pool.query(
    "UPDATE plants SET image = ? WHERE id = ?",
    [newData, plantId]
  );
  return updatedImage;
};
module.exports = updatePlantImage;
