import "./UserPage.css";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { plantItemPropTypes, userPropTypes } from "../../utils/customPropTypes";
import { UserPosts } from "../../components/UserPosts/UserPosts";
import { SlOptionsVertical } from "react-icons/sl";
import { getUsersDataService } from "../../services/userService";
import { LoadingComponent } from "../../components/Loading/LoadingComponent";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const UserPage = () => {
  const { id } = useParams();
  const { currentUser, token, logout } = useContext(AuthContext);
  const { user, setUser } = useUser(id);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [options, setOptions] = useState(false);
  console.log("userPageId", id);

  useEffect(() => {
    const getUserPage = async () => {
      try {
        setErrorMsg("");
        setLoading(true);
        const userData = await getUsersDataService(id, token);
        console.log("user data", userData);
        setUser(userData);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUserPage();
  }, [id, token, setUser]);

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
      {user && (
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
      )}
      {loading ? <LoadingComponent /> : null}
      {errorMsg ? <p>{errorMsg}</p> : null}
    </div>
  );
};
UserPage.propTypes = {
  plant: plantItemPropTypes,
  user: userPropTypes,
  userId: PropTypes.number,
  setUser: PropTypes.func,
};
