const getDb = require("../../database/getDb");

const insertAvatar = async (imageName, userId) => {
  const pool = getDb();

  const [{ insertUserAvatar }] = await pool.query(
    "INSERT INTO users (avatar, userId) VALUES (?, ?)",
    [imageName, userId]
  );
  return insertUserAvatar;
};

module.exports = insertAvatar;
