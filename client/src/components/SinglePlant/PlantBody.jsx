import "./PlantBody.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const PlantBody = ({
  userId,
  creator_name,
  creator_avatar,
  title,
  description,
  image,
  category,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="plant-body">
      <div className="plant-creator">
        <section>
          <Link to={`/users/${userId}`}>
            {creator_avatar && (
              <img
                src={`${baseURL}/${creator_avatar}`}
                alt="avatar de usuario"
                className="user-avatar-img"
              />
            )}
          </Link>
        </section>
        <Link to={`/users/${userId}`} className="creator-link">
          {" "}
          {creator_name}
        </Link>
      </div>
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
          : `${description.substring(0, 150)}...`}
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
  userId: PropTypes.number,
  creator_name: PropTypes.string,
  creator_avatar: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
