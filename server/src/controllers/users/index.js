const createUser = require("./createUser");
const loginUser = require("./loginUser");
const getUser = require("./getUser");
const getMe = require("./getMe");
const updateUserData = require("./updateUserData");
const getUserFavs = require("./getUserFavs");
const getAllUsers = require("./getAllUsers");
const getUserByName = require("./getUserByName");

module.exports = {
  createUser,
  loginUser,
  getUser,
  getMe,
  getAllUsers,
  updateUserData,
  getUserFavs,
  getUserByName,
};
