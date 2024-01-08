import "./UserPage.css";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { UpdateUser } from "../../components/UpdateUser/UpdateUser";
import { ErrorMessage } from "../../components/ErrorComponent";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  if (loading) return <p>Cargando...</p>;
  if (error) return <ErrorMessage />;
  return (
    <div className="user-page">
      <h2>{user.name}</h2>
      <img
        src={`${baseURL}/${user.avatar}`}
        alt="avatar-de-usuario"
        className="user-avatar"
      ></img>
      <p>{user.email}</p>
      <p>{user.bio}</p>
      <section>
        <UpdateUser />
      </section>
    </div>
  );
};
