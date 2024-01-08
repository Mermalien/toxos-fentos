import { Link } from "react-router-dom";
import "./PrincipalPage.css";
import { PlantsList } from "../../components/PlantsList/PlantsList";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import PropTypes from "prop-types";
import { useAllPlants } from "../../hooks/useAllPlants";
import { ErrorMessage } from "../../components/ErrorComponent";

export const PrincipalPage = () => {
  const { plants, setPlants, loading, error } = useAllPlants();
  if (loading) return <p>Cargando Pagina principal...</p>;
  if (error) return <ErrorMessage />;
  return (
    <section className="principal-page-container">
      <div className="sections">
        <div className="section">
          <button>
            <Link to={"seasons"}>Plantas de temporada🌸</Link>
          </button>
        </div>
        <div className="section-list">
          <PlantsList plants={plants} setPlants={setPlants} />
        </div>
      </div>
    </section>
  );
};
PrincipalPage.propTypes = {
  plants: PropTypes.objectOf(plantItemPropTypes),
};
