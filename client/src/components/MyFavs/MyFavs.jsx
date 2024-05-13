import "./MyFavs.css";
import { useMyFavs } from "../../hooks/useMyFavs";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import { handleFavService } from "../../services/plantService";
import { RiDeleteBinLine } from "react-icons/ri";
import { LoadingComponent } from "../Loading/LoadingComponent";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const MyFavs = ({ plant }) => {
  const { token } = useContext(AuthContext);
  const { favs, loading, error, refetch } = useMyFavs(token);

  if (loading) return <LoadingComponent />;

  const sortedFavs = favs
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleDeleteList = async (plantId) => {
    try {
      await handleFavService(plantId);
      localStorage.setItem(`fav_${plant.id}`, JSON.stringify(!favs));
      refetch();
    } catch (error) {
      throw new Error(error.message);
    } finally {
      window.location.reload();
    }
  };
  return (
    <div>
      <h2>Mis favoritos</h2>
      {favs ? (
        <ol className="my-favorites">
          {sortedFavs.map((favItem) => {
            return (
              <li key={favItem.plantId} className="favorite-item">
                <p className="title-fav"> {favItem.title} </p>
                <img src={`${baseURL}/${favItem.image}`}></img>
                <p> {favItem.description}</p>
                <button onClick={() => handleDeleteList(favItem.plantId)}>
                  <RiDeleteBinLine className="react-icon" />
                </button>
              </li>
            );
          })}
        </ol>
      ) : (
        <p>Esta carpeta está vacía.</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
MyFavs.propTypes = {
  favItem: plantItemPropTypes,
  plant: plantItemPropTypes,
};
