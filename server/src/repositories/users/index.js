const insertUserInDb = require("./insertUserInDb");
const insertAvatar = require("./insertAvatar");
const selectUserById = require("./selectUserById");
const selectUserByEmail = require("./selectUserByEmail");
const updateUserById = require("./updateUserById");
const updateAvatar = require("./updateAvatar");

module.exports = {
  insertUserInDb,
  insertAvatar,
  selectUserById,
  selectUserByEmail,
  updateUserById,
  updateAvatar,
};
