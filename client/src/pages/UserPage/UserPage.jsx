import "./UserPage.css";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import { UserPosts } from "../../components/UserPosts/UserPosts";
import { SlOptionsVertical } from "react-icons/sl";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const UserPage = () => {
  const { id } = useParams();
  const { user, setUser } = useUser(id);
  const [errorMsg, setErrorMsg] = useState("");
  const { currentUser, logout } = useContext(AuthContext);
  const [options, setOptions] = useState(false);
  console.log("userPage", user.id);

  // Verificar si es mi perfil de usuario
  const itsMe = currentUser?.id === user?.id;

  const handleOptionsMenu = () => {
    try {
      setOptions(!options);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="user-page">
      <div key={user.id}>
        <div className="single-user-info">
          <img
            src={`${baseURL}/${user && user?.avatar}`}
            alt="avatar-de-usuario"
            className="user-avatar"
          ></img>
          <h2 className="user-name">{user?.name}</h2>
          {itsMe && (
            <div className="its-me">
              <button
                className={`options ${setOptions ? "open" : ""}`}
                onClick={handleOptionsMenu}
              >
                <SlOptionsVertical
                  className="options-react-icon"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </button>
              {options && (
                <div className="open-user-options">
                  <button className="logout-btn" onClick={() => logout()}>
                    <MdOutlinePowerSettingsNew
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                      className="react-icon"
                    />
                  </button>
                  <section className="user-page-links">
                    <Link to={"/user/update"} className="link-to-update">
                      Actualiza tus datos
                    </Link>
                    <Link to={`/delete-user/${id}`}>Eliminar cuenta</Link>
                    <Link to={"/user/favs"} className="link-to-favorites">
                      Favoritos
                    </Link>
                  </section>
                </div>
              )}
            </div>
          )}
          <p className="user-bio">{user?.bio}</p>
        </div>

        <h3>MI JARDÍN</h3>
        <div className="list-of-posts">
          <UserPosts user={user} setUser={setUser} />
        </div>
      </div>
      {errorMsg ? <p>{errorMsg}</p> : null}
    </div>
  );
};
UserPage.propTypes = {
  plant: plantItemPropTypes,
};
