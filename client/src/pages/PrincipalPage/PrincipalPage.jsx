import { Link } from "react-router-dom";
import "./PrincipalPage.css";
import { PlantsList } from "../../components/PlantsList/PlantsList";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import PropTypes from "prop-types";
import { useAllPlants } from "../../hooks/useAllPlants";
import { ErrorMessage } from "../../components/ErrorComponent";
import { PlantsSearcher } from "../../components/Searcher/PlantsSearcher";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RiUserSearchLine } from "react-icons/ri";

export const PrincipalPage = () => {
  const { plants, setPlants, loading, error } = useAllPlants();
  const [isOpen, setIsOpen] = useState(false);

  if (loading) return <p>Cargando Pagina principal...</p>;
  if (error) return <ErrorMessage />;

  const handleOpenSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="principal-page-container">
      <div
        className={`searchers ${isOpen ? "isOpen" : ""}`}
        onClick={handleOpenSearch}
      >
        <div className="go-search-icon">
          <GoSearch className="react-icon" />
        </div>
      </div>
      {isOpen && (
        <div className="searchers-components">
          <PlantsSearcher setPlants={setPlants} />
        </div>
      )}
      <div className="users-search">
        <Link to={"/users"}>
          <RiUserSearchLine className="react-icon" />
        </Link>
      </div>
      <div className="sections">
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
