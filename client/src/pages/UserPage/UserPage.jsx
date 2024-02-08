import "./UserPage.css";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { ErrorMessage } from "../../components/ErrorComponent";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, errorMsg } = useUser(id);
  const { currentUser, logout } = useContext(AuthContext);

  const itsMe = currentUser?.id === user?.id;
  console.log("USER PAGE ID:", id);

  if (loading) return <p>Cargando...</p>;
  if (errorMsg) return <ErrorMessage />;

  return (
    <div className="user-page">
      <div key={user?.id}>
        <h2>{user?.name}</h2>
        <img
          src={`${baseURL}/${user?.avatar}`}
          alt="avatar-de-usuario"
          className="user-avatar"
        ></img>
        <p>{user?.email}</p>
        <p>{user?.bio}</p>

        {itsMe && (
          <div className="its-me">
            <button className="logout-btn" onClick={() => logout()}>
              <MdOutlinePowerSettingsNew
                style={{ width: "25px", height: "25px" }}
                className="react-icon"
              />
            </button>

            <section className="user-page-links">
              <Link to={"/user/update"} className="link-to-update">
                Actualiza tus datos
              </Link>
              <Link to={"/user/favs"} className="link-to-favorites">
                Favoritos
              </Link>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
