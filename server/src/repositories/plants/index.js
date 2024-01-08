const deletePlantById = require("./deletePlantById");
const insertPlantImage = require("./insertPlantImage");
const insertPlantInDb = require("./insertPlantInDb");
const selectPlantById = require("./selectPlantById");
const selectPlantByName = require("./selectPlantByName");
const selectPlantImage = require("./selectPlantImage");
const selectPlants = require("./selectPlants");
const selectPlantByCategory = require("./selectPlantByCategory");

module.exports = {
  insertPlantInDb,
  insertPlantImage,
  selectPlantById,
  selectPlants,
  selectPlantImage,
  deletePlantById,
  selectPlantByName,
  selectPlantByCategory,
};
