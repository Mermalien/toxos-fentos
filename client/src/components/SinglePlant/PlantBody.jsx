import "./PlantBody.css";
import PropTypes from "prop-types";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const PlantBody = ({ description, image, category }) => {
  return (
    <div className="plant-body">
      <div className="plant-image-container">
        {image && (
          <img
            className="plant-image"
            src={`${baseURL}/${image}`}
            alt={"Foto de la planta"}
          />
        )}
      </div>
      <div className="plant-description">{description}</div>
      <div className="plant-category">Tipo: {category}</div>
    </div>
  );
};

PlantBody.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
