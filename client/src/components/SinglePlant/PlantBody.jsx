import "./PlantBody.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const PlantBody = ({ title, description, image, category }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

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
      <div className="plant-title">{title}</div>
      <div className="plant-description">
        {showFullDescription
          ? description
          : `${description.substring(0, 200)}...`}
        {!showFullDescription ? (
          <button onClick={() => setShowFullDescription(true)}>
            <MdOutlineExpandMore className="react-icon" />
          </button>
        ) : (
          <button onClick={() => setShowFullDescription(false)}>
            <MdOutlineExpandLess className="react-icon" />
          </button>
        )}
      </div>
      <div className="plant-category">Tipo: {category}</div>
    </div>
  );
};

PlantBody.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
