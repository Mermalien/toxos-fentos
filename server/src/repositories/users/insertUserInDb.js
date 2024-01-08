const getDb = require("../../database/getDb");

const insertUserInDb = async (user) => {
  const { name, email, encryptedPassword, bio, avatarName } = user;

  const pool = getDb();

  const [{ insertUser }] = await pool.query(
    "INSERT INTO users(name, email, password, bio, avatar) VALUES (?, ?, ?, ?, ?)",
    [name, email, encryptedPassword, bio, avatarName]
  );

  return insertUser;
};

module.exports = insertUserInDb;
