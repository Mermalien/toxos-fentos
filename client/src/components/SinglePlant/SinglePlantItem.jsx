import "./SinglePlant.css";
import PropTypes from "prop-types";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import { PlantHeader } from "./PlantHeader";
import { PlantBody } from "./PlantBody";
import { useContext, useState } from "react";
import {
  deletePlantService,
  handleFavService,
} from "../../services/plantService";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

export const SinglePlantItem = ({ plant, deletePlant, plants, setPlants }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [error, setError] = useState("");

  const [isFav, setIsFav] = useState(() => {
    const storedValue = localStorage.getItem(`fav_${plant.id}`);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const handleFav = async (e) => {
    try {
      e.preventDefault();
      setError("");
      const body = await handleFavService(plant.id);

      setPlants(
        plants.map((currentPlant) => {
          if (currentPlant.id === plant.id) {
            if (isFav) {
              currentPlant.fav -= 1;
            } else {
              currentPlant.fav + 1;
            }
          }
          return currentPlant;
        })
      );
      setIsFav(!isFav);
      localStorage.setItem(`fav_${plant.id}`, JSON.stringify(!isFav));

      if (body.status === "error") {
        throw new Error(body.message);
      }
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  const deleteItem = async (plantId, user) => {
    try {
      await deletePlantService(plantId);
      if (user) {
        deletePlant(plantId);
      } else {
        navigate("/");
      }
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="single-plant-container">
        <div className="single-plant-item" key={plant.id}>
          <PlantHeader title={plant.title} />
          <PlantBody
            category={plant.category}
            description={
              showFullDescription
                ? plant.description
                : `${plant.description.substring(0, 250)}...`
            }
            image={plant.image}
            plantId={plant.id}
          />
          <div className="single-plant-btns">
            {!showFullDescription ? (
              <button onClick={() => setShowFullDescription(true)}>
                Ver más
              </button>
            ) : (
              <button onClick={() => setShowFullDescription(false)}>
                Mostrar menos
              </button>
            )}
            {user ? (
              <div>
                <button onClick={handleFav}>
                  {isFav ? (
                    <MdFavorite
                      style={{ width: "25px", height: "25px", fill: "red" }}
                    />
                  ) : (
                    <MdFavorite
                      style={{ width: "25px", height: "25px", fill: "gray" }}
                    />
                  )}
                </button>
              </div>
            ) : null}
            {user?.id === plant.userId ? (
              <button
                onClick={() => {
                  if (window.confirm("¿Quieres eliminar esta publicación?"))
                    deleteItem(plant.id);
                  navigate("/");
                }}
              >
                <RiDeleteBinLine
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {error && <p>{error}</p>}
    </>
  );
};

SinglePlantItem.propTypes = {
  plant: plantItemPropTypes,
  plants: PropTypes.arrayOf(plantItemPropTypes),
  setPlants: PropTypes.func,
  deletePlant: PropTypes.func,
};
