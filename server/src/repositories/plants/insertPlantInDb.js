const getDb = require("../../database/getDb");

const insertPlantInDb = async (plant) => {
  const { userId, title, description, image, category } = plant;

  const pool = getDb();

  const [{ insertPlant }] = await pool.query(
    "INSERT INTO plants (userId, title, description, image, category) VALUES (?, ?, ?, ?, ?)",
    [userId, title, description, image, category]
  );

  return insertPlant;
};

module.exports = insertPlantInDb;
