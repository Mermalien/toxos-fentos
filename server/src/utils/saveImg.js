const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");
const uuid = require("uuid");

const saveImg = async (imageBuffer, width) => {
  const uploadsPath = path.resolve(process.env.UPLOADS_DIR);

  try {
    await fs.access(uploadsPath);
  } catch (error) {
    await fs.mkdir(uploadsPath);
  }

  const sharpImg = sharp(imageBuffer);
  sharpImg.resize(width);
  const imageName = `${uuid.v4()}.jpg`;
  const imagePath = path.resolve(uploadsPath, imageName);

  await sharpImg.toFile(imagePath);
  return imageName;
};

module.exports = saveImg;
