import "./App.css";
import PropTypes from "prop-types";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { PrincipalPage } from "./pages/PrincipalPage/PrincipalPage";
import { Seasons } from "./components/Seasons/Seasons";
import { PlantsList } from "./components/PlantsList/PlantsList";
import { CreatePlant } from "./components/CreatePlant/CreatePlant";
import { UserPage } from "./pages/UserPage/UserPage";
import { UpdateUser } from "./components/UpdateUser/UpdateUser";
import { MyFavs } from "./components/MyFavs/MyFavs";
import { UsersList } from "./components/UsersList/UsersList";
import { SpringPlants } from "./components/Seasons/Spring/SpringPlants";
import { SummerPlants } from "./components/Seasons/Summer/SummerPlants";
import { AutumnPlants } from "./components/Seasons/Autumn/AutumnPlants";
import { WinterPlants } from "./components/Seasons/Winter/WinterPlants";
import { Normas } from "./pages/More/Normas";
import { EditPost } from "./components/EditPost/EditPost";
import { DeleteUser } from "./components/DeleteUser/DeleteUser";
import { SingleComment } from "./components/SingleComment/SingleComment";
import { PlantComments } from "./components/PlantComments/PlantComments";
import { AddComment } from "./components/AddComment/AddComment";
import { Social } from "./components/Social/Social";
import { UserPlantItem } from "./components/UserPosts/UserPlantItem";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) return <Navigate to="/" />;
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <div className="App">
          <Header />
          <div className="switch-container">
            <label className="switch">
              <input
                className="checkbox"
                type="checkbox"
                onChange={toggleTheme}
                checked={darkMode}
              />
              <span className="slider">
                {darkMode ? (
                  <MdLightMode className="light-mode-icon" />
                ) : (
                  <MdDarkMode className="dark-mode-icon" />
                )}
              </span>
            </label>
          </div>
          <Routes>
            <Route path="/" element={<PrincipalPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePlant />} />
            <Route path="/delete-user/:id" element={<DeleteUser />} />

            <Route path="/seasons" element={<Seasons />} />
            <Route path="/seasons/spring" element={<SpringPlants />} />
            <Route path="/seasons/summer" element={<SummerPlants />} />
            <Route path="/seasons/autumn" element={<AutumnPlants />} />
            <Route path="/seasons/winter" element={<WinterPlants />} />
            <Route path="/normas-de-uso" element={<Normas />} />
            <Route path="/contact" element={<Social />} />

            <Route path="/plants" element={<PlantsList />} />
            <Route path="/plants/:plantId" element={<UserPlantItem />} />
            <Route path="/plant/:plantId/update" element={<EditPost />} />
            <Route path="/comments/:plantId" element={<PlantComments />} />
            <Route path="/comments/comment/:id" element={<SingleComment />} />
            <Route path="/comment/:plantId" element={<AddComment />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route
              path="/user/update"
              element={
                <PrivateRoute>
                  <UpdateUser />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/favs"
              element={
                <PrivateRoute>
                  <MyFavs />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
