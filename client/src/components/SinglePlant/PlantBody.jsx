import "./PlantBody.css";
const baseURL = import.meta.env.VITE_APP_BACKEND;
import { plantItemPropTypes } from "../../utils/customPropTypes";

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
  description: plantItemPropTypes,
  image: plantItemPropTypes,
  category: plantItemPropTypes,
};
