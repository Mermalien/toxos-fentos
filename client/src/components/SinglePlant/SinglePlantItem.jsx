import "./SinglePlant.css";
import PropTypes from "prop-types";
import {
  commentItemPropTypes,
  plantItemPropTypes,
} from "../../utils/customPropTypes";
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
import { RiEdit2Fill } from "react-icons/ri";
import { BiCommentAdd } from "react-icons/bi";
import { useMyFavs } from "../../hooks/useMyFavs";
import { EditPost } from "../EditPost/EditPost";
import { PlantComments } from "../PlantComments/PlantComments";
import { useComments } from "../../hooks/useComments";
import { AddComment } from "../AddComment/AddComment";

export const SinglePlantItem = ({ plant, deletePlant, plants, setPlants }) => {
  const navigate = useNavigate();
  const { currentUser, token } = useContext(AuthContext);
  const { refetch } = useMyFavs(token);
  const { comments } = useComments(plant.id);
  const [openCreate, setOpenCreate] = useState(false);
  const [error, setError] = useState("");
  const [isFav, setIsFav] = useState(() => {
    const storedValue = localStorage.getItem(`fav_${plant.id}`);
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const [openEdit, setOpenEdit] = useState(false);

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
      refetch();
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

  const handleEditClick = () => {
    setOpenEdit(!openEdit);
  };

  // Abrir añadir comentario
  const openAddComment = () => {
    setOpenCreate(!openCreate);
  };

  return (
    <>
      <div className="single-plant-container">
        <div className="single-plant-item" key={plant.id}>
          <PlantBody
            title={plant.title}
            category={plant.category}
            description={plant.description}
            image={plant.image}
          />
          <div className="plant-comments">
            <PlantComments plant={plant} comments={comments} />
          </div>

          <div className="item-buttons">
            <div className="fav-btn">
              {currentUser ? (
                <div>
                  <button onClick={handleFav}>
                    {isFav ? (
                      <MdFavorite
                        style={{ width: "25px", height: "25px", fill: "red" }}
                        className="react-icon"
                      />
                    ) : (
                      <MdFavorite
                        className="react-icon"
                        style={{ width: "25px", height: "25px", fill: "gray" }}
                      />
                    )}
                  </button>
                  <div className="add-comment">
                    <BiCommentAdd
                      onClick={openAddComment}
                      className="react-icon"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                </div>
              ) : null}
            </div>
            {currentUser?.id === plant.userId ? (
              <div className="is-my-plant">
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
                    className="react-icon"
                  />
                </button>
                <button onClick={handleEditClick}>
                  <RiEdit2Fill
                    className="react-icon"
                    style={{
                      width: "25px",
                      height: "25px",
                    }}
                  />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {openEdit && <EditPost plant={plant} setOpenEdit={setOpenEdit} />}
      {openCreate && <AddComment plant={plant} setOpenCreate={setOpenCreate} />}
      {error && <p>{error}</p>}
    </>
  );
};

SinglePlantItem.propTypes = {
  plant: plantItemPropTypes,
  plants: PropTypes.arrayOf(plantItemPropTypes),
  setPlants: PropTypes.func,
  deletePlant: PropTypes.func,
  comments: PropTypes.arrayOf(commentItemPropTypes),
  setComments: PropTypes.func,
};
