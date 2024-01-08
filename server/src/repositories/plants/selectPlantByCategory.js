const getDb = require("../../database/getDb");

const selectPlantByCategory = async (category) => {
  const pool = getDb();
  await pool.query(`SELECT * FROM plants WHERE category = ?`, [category]);
  return category;
};
module.exports = selectPlantByCategory;
