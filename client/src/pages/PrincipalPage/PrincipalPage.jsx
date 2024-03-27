import { Link } from "react-router-dom";
import "./PrincipalPage.css";
import { PlantsList } from "../../components/PlantsList/PlantsList";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import PropTypes from "prop-types";
import { useAllPlants } from "../../hooks/useAllPlants";
import { ErrorMessage } from "../../components/ErrorComponent";
import { PlantsSearcher } from "../../components/Searcher/PlantsSearcher";
import { useContext } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { AuthContext } from "../../context/AuthContext";
import { LoginPage } from "../LoginPage/LoginPage";
import { LoadingComponent } from "../../components/Loading/LoadingComponent";

export const PrincipalPage = () => {
  const { plants, setPlants, loading, error } = useAllPlants();
  const { currentUser } = useContext(AuthContext);

  if (error) return <ErrorMessage />;
  if (loading) return <LoadingComponent />;

  return (
    <div className="principal-page">
      {currentUser ? (
        <div className="navigation">
          <div className="searchers">
            <div className="plants-searcher-item">
              <PlantsSearcher setPlants={setPlants} />
            </div>

            <div className="users-search">
              <Link to={"/users"}>
                <RiUserSearchLine className="react-icon" />
              </Link>
            </div>
          </div>

          <div className="sections">
            <div className="section-list">
              <PlantsList plants={plants} setPlants={setPlants} />
            </div>
          </div>
        </div>
      ) : (
        <div className="not-logged">
          <section className="login-section">
            <LoginPage />
          </section>
        </div>
      )}
    </div>
  );
};
PrincipalPage.propTypes = {
  plants: PropTypes.objectOf(plantItemPropTypes),
};
