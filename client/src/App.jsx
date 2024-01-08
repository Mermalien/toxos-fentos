import "./App.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { PrincipalPage } from "./pages/PrincipalPage/PrincipalPage";
import { Seasons } from "./components/Seasons/Seasons";
import { SinglePlantItem } from "./components/SinglePlant/SinglePlantItem";
import { PlantsList } from "./components/PlantsList/PlantsList";
import { CreatePlant } from "./components/CreatePlant/CreatePlant";
import { UserPage } from "./pages/UserPage/UserPage";
import { UpdateUser } from "./components/UpdateUser/UpdateUser";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) return <Navigate to="/" />;
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreatePlant />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/plants" element={<PlantsList />} />
          <Route path="/plants/:plantId" element={<SinglePlantItem />} />
          <Route
            path="/users/:id"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/update"
            element={
              <PrivateRoute>
                <UpdateUser />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
