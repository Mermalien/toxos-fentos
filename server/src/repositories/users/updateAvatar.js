const getDb = require("../../database/getDb");

const updateAvatar = async (userId, newData) => {
  const pool = getDb();
  const [result] = await pool.query(
    "UPDATE users SET avatar = ? WHERE id = ?",
    [newData, userId]
  );
  return result;
};

module.exports = updateAvatar;
