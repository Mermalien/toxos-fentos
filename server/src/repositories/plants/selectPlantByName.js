const getDb = require("../../database/getDb");

const selectPlantByName = async ({ title }) => {
  const pool = getDb();
  const [[plantByName]] = await pool.query(
    `SELECT * FROM plants WHERE title = ?`,
    [title]
  );
  return [plantByName];
};
module.exports = selectPlantByName;
