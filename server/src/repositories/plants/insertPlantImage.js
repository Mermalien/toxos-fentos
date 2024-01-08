const getDb = require("../../database/getDb");

const insertPlantImage = async (imageName, plantId) => {
  const pool = getDb();

  const [{ plantImage }] = await pool.query(
    "INSERT INTO plants(image, plantId) VALUES(?, ?)",
    [imageName, plantId]
  );

  return plantImage;
};

module.exports = insertPlantImage;
