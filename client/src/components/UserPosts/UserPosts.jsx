import "./UserPosts.css";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useAllPlants } from "../../hooks/useAllPlants";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const UserPosts = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  const { plants } = useAllPlants();

  const userPlants = user
    ? plants.filter((plant) => plant.userId === user.id)
    : [];

  return (
    <div className="user-plants-container">
      <ol className="user-plants-list" key={plants.userId}>
        {userPlants?.length > 0 ? (
          userPlants?.map((plant) => {
            return (
              <li key={plant.id} className="user-post-item">
                <img
                  src={`${baseURL}/${plant?.image}`}
                  alt={plant.title}
                  className="user-post-image"
                ></img>
              </li>
            );
          })
        ) : (
          <p>No hay publicaciones</p>
        )}
      </ol>
      {loading && <p>Cargando listado...</p>}
      {error && error.message}
    </div>
  );
};
