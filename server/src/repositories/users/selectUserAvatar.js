const getDb = require("../../database/getDb");

const selectUserAvatar = (userId) => {
  const pool = getDb();
  const [userAvatar] = pool.query("SELECT avatar FROM users WHERE id = ?", [
    userId,
  ]);
  return userAvatar;
};
module.exports = selectUserAvatar;
