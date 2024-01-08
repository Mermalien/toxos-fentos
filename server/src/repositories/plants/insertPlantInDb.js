const getDb = require("../../database/getDb");

const insertPlantInDb = async (plant) => {
  const { userId, title, description, image, category, flower } = plant;

  const pool = getDb();

  const [{ insertPlant }] = await pool.query(
    "INSERT INTO plants (userId, title, description, image, category, flower) VALUES (?, ?, ?, ?, ?, ?)",
    [userId, title, description, image, category, flower]
  );

  return insertPlant;
};

module.exports = insertPlantInDb;
