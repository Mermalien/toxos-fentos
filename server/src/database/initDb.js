const getDb = require("./getDb");

async function main() {
  let connection;

  try {
    connection = await getDb();

    console.log("Borrando tablas");

    await connection.query("DROP TABLE IF EXISTS fav, plants, users");

    console.log("Creando tablas");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(200) NOT NULL,
        bio VARCHAR(2000),
        avatar VARCHAR(500),
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS plants (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        userId INT UNSIGNED NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id),
        title VARCHAR(200) NOT NULL,
        description VARCHAR(1500) NOT NULL,
        image VARCHAR(500),
        category ENUM('aromaticas', 'interior', 'exterior', 'temporada','otro')NOT NULL,
        flower TINYINT(0),
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS fav(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        userId INT UNSIGNED NOT NULL,
        plantId INT UNSIGNED NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (plantId) REFERENCES plants(id)
      )
    `);

    console.log("Tablas creadas");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
}
main();
