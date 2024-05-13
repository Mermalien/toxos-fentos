import PropTypes from "prop-types";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import { useParams } from "react-router-dom";
import { useAllPlants } from "../../hooks/useAllPlants";
import { LoadingComponent } from "../Loading/LoadingComponent";
import { SinglePlantItem } from "../SinglePlant/SinglePlantItem";

export const UserPlantItem = () => {
  const { plantId } = useParams();
  const { plants, loading, error } = useAllPlants();

  return (
    <>
      <div className="user-plant-container" key={plantId}>
        <div className="user-plant-item">
          {plants &&
            plants.map((plant) => {
              if (plant.id == plantId) {
                return (
                  <div key={plant.id}>
                    <SinglePlantItem plant={plant} />
                  </div>
                );
              }
            })}
        </div>
        {loading && <LoadingComponent />}
        {error && <p>{error}</p>}
      </div>
    </>
  );
};
UserPlantItem.propTypes = {
  plantId: PropTypes.number,
  plant: plantItemPropTypes,
  plants: PropTypes.arrayOf(plantItemPropTypes),
  setPlant: PropTypes.func,
};
