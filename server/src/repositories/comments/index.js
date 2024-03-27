const insertCommentInDb = require("./insertCommentInDb");
const removeComment = require("./removeComment");
const selectCommentById = require("./selectCommentById");
const selectCommentsByPlant = require("./selectCommentsByPlant");

module.exports = {
  insertCommentInDb,
  removeComment,
  selectCommentById,
  selectCommentsByPlant,
};
