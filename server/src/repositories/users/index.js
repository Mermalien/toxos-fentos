const insertUserInDb = require("./insertUserInDb");
const insertAvatar = require("./insertAvatar");
const selectUserById = require("./selectUserById");
const selectUserByEmail = require("./selectUserByEmail");
const updateUserById = require("./updateUserById");
const updateAvatar = require("./updateAvatar");
const selectAllUsers = require("./selectAllUsers");
const selectUserByName = require("./selectUserByName");

module.exports = {
  insertUserInDb,
  insertAvatar,
  selectUserById,
  selectUserByEmail,
  selectAllUsers,
  updateUserById,
  updateAvatar,
  selectUserByName,
};
