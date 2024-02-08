import "./MyFavs.css";
import { useMyFavs } from "../../hooks/useMyFavs";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import { handleFavService } from "../../services/plantService";
import { RiDeleteBinLine } from "react-icons/ri";

const baseURL = import.meta.env.VITE_APP_BACKEND;

export const MyFavs = () => {
  const { token } = useContext(AuthContext);
  const { favs, loading, error, refetch } = useMyFavs(token);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Ha habido un error</p>;

  const sortedFavs = favs
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleDeleteList = async (plantId) => {
    try {
      await handleFavService(plantId);
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
    </div>
  );
};
MyFavs.propTypes = {
  favItem: plantItemPropTypes,
  plant: plantItemPropTypes,
};
