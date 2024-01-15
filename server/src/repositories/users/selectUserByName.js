const getDb = require("../../database/getDb");

const selectUserByName = async ({ name }) => {
  const pool = getDb();
  const [[userByName]] = await pool.query(
    "SELECT name, avatar FROM users WHERE name =?",
    [name]
  );
  return [userByName];
};
module.exports = selectUserByName;
