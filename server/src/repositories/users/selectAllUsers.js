const getDb = require("../../database/getDb");

const selectAllUsers = async (queryParams) => {
  const pool = getDb();
  let sqlQuery =
    "SELECT users.id, users.name, users.avatar, users.bio, users.createdAt, plants.title, plants.image, plants.description FROM users";
  sqlQuery += " LEFT JOIN plants ON users.id = plants.userId";
  let values = [];
  let whereClause = " WHERE";

  for (const key in queryParams) {
    const value = queryParams[key];

    sqlQuery += `${whereClause} users.${key} LIKE ?`;
    values.push(`%${value}%`);
    whereClause = " AND";
  }
  sqlQuery += " GROUP BY users.id, plants.id";
  const [usersWithPosts] = await pool.query(sqlQuery, values);
  return usersWithPosts;
};
module.exports = selectAllUsers;
