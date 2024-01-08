import "./PlantHeader.css";
import { plantItemPropTypes } from "../../utils/customPropTypes";

export const PlantHeader = ({ title }) => {
  return (
    <div className="plant-header">
      <div className="plant-title">{title}</div>
    </div>
  );
};

PlantHeader.propTypes = {
  title: plantItemPropTypes,
};
