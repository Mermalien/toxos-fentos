import "./PlantHeader.css";
import PropTypes from "prop-types";
export const PlantHeader = ({ title }) => {
  return (
    <div className="plant-header">
      <div className="plant-title">{title}</div>
    </div>
  );
};

PlantHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
