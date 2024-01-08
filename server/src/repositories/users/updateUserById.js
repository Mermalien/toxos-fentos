const getDb = require("../../database/getDb");

const updateUserById = async (userId, newData) => {
  const pool = getDb();
  const [result] = await pool.query("UPDATE users SET ? WHERE id = ?", [
    newData,
    userId,
  ]);
  return result;
};
module.exports = updateUserById;
