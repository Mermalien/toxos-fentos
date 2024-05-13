const getDb = require("../../database/getDb");

const updateUserById = async (newData, userId) => {
  const pool = getDb();
  const [result] = await pool.query("UPDATE users SET ? WHERE id = ?", [
    userId,
    newData,
  ]);
  return result;
};
module.exports = updateUserById;
