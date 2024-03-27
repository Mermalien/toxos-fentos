const getDb = require("../../database/getDb");

const updatePlant = async (newData, plantId) => {
  const pool = getDb();
  const [updatedPlant] = await pool.query("UPDATE plants SET ? WHERE id = ?", [
    plantId,
    newData,
  ]);
  return updatedPlant;
};
module.exports = updatePlant;
