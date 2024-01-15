import "./PlantsList.css";
import { SinglePlantItem } from "../SinglePlant/SinglePlantItem";
import PropTypes from "prop-types";

export const PlantsList = ({ plants, setPlants }) => {
  const sortedItems = plants
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  console.log(sortedItems);
  return (
    <div className="plants-list">
      {sortedItems.map((plant) => {
        return (
          <li key={plant.id}>
            <SinglePlantItem
              plant={plant}
              plants={plants}
              setPlants={setPlants}
            />
          </li>
        );
      })}
    </div>
  );
};

PlantsList.propTypes = {
  map: PropTypes.func,
  plants: PropTypes.array,
  setPlants: PropTypes.func,
};
