require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

// Controllers de usuario
const {
  createUser,
  loginUser,
  getMe,
  getUser,
  getAllUsers,
  updateUserData,
  getUserFavs,
  deleteUser,
} = require("./src/controllers/users");

// Controllers de las plantas
const {
  createPlant,
  deletePlant,
  getAllPlants,
  getSinglePlant,
  getByName,
  getPlantByCategory,
  updatePlantData,
} = require("./src/controllers/plants");

// Controller de favoritos
const favController = require("./src/controllers/fav/favController");

// Controller de autorización
const validateAuth = require("./src/middlewares/validateAuth");

// Controllers de error
const { handleError, notFound } = require("./src/controllers/error");

// Controllers de comentarios
const {
  createComment,
  deleteComment,
  getSingleComment,
} = require("./src/controllers/comments");
const getPlantComments = require("./src/controllers/comments/getPlantComments");

const app = express();
const bodyParser = require("body-parser");
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static(process.env.UPLOADS_DIR));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoints de usuario
app.post("/login", loginUser);
app.post("/register", createUser);
app.get("/user", validateAuth, getMe);
app.get("/users", getAllUsers);
app.get("/users/:id", validateAuth, getUser);
app.get("/user/favs", validateAuth, getUserFavs);
app.put("/user/update", validateAuth, updateUserData);
app.delete("/delete-user/:id", validateAuth, deleteUser);

// Endpoints de las plantas
app.get("/plants", getAllPlants);
app.get("/plants/:title", getByName);
app.get("/plants/:category", getPlantByCategory);
app.get("/plants/:plantId", getSinglePlant);
app.post("/create", validateAuth, createPlant);
app.post("/fav/:plantId", validateAuth, favController);
app.delete("/delete/:plantId", validateAuth, deletePlant);
app.put("/plant/:plantId/update", validateAuth, updatePlantData);

// Endpoints de los comentarios
app.get("/comments/:plantId", getPlantComments);
app.get("/comments/comment/:id", getSingleComment);
app.post("/comment/:plantId", validateAuth, createComment);
app.delete("/comment/:id", validateAuth, deleteComment);

app.use(handleError);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
