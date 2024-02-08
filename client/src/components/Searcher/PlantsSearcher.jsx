import "./Searcher.css";
import { useState } from "react";
import { listPlantsService } from "../../services/plantService";
import PropTypes from "prop-types";
import { GoSearch } from "react-icons/go";

export const PlantsSearcher = ({ setPlants }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await listPlantsService(title, category);
      setPlants(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plants-searcher">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Busca plantas por nombre"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Busca plantas por categoría"
      />
      <button onClick={() => handleSearch()}>
        <GoSearch className="react-icon" />
      </button>
      {error && <p>{error}</p>}
      {loading ? <p>Buscando....</p> : null}
    </div>
  );
};
PlantsSearcher.propTypes = {
  setPlants: PropTypes.func,
};
