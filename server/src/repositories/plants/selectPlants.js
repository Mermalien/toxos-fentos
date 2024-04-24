const getDb = require("../../database/getDb");

const selectPlants = async (queryParams) => {
  const pool = getDb();

  let sqlQuery =
    "SELECT p.*, f.id AS fav, c.id AS comments, u.name AS creator_name FROM plants p LEFT JOIN fav f ON p.id = f.plantId LEFT JOIN comments c ON p.id = c.plantId LEFT JOIN users u ON p.userId = u.id";
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
