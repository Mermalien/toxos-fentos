const getDb = require("../../database/getDb");

const selectPlants = async (queryParams) => {
  const pool = getDb();

  let sqlQuery =
    "SELECT p.*, COUNT(f.id) fav FROM plants p LEFT JOIN fav f ON p.id = f.plantId";
  let values = [];
  let clause = " WHERE";

  for (const key in queryParams) {
    const value = queryParams[key];
    sqlQuery += `${clause} ${key} LIKE ?`;

    values.push(`%${value}%`);
    clause = " AND";
  }
  sqlQuery += " GROUP BY p.id";
  const [plants] = await pool.query(sqlQuery, values);
  return plants;
};
module.exports = selectPlants;
