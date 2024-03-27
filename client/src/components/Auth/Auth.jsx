import "./Auth.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const Auth = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    currentUser && (
      <section className="auth-btns">
        <div className="logged-btns">
          <button className="btn-link-auth">
            <Link to={`/users/${currentUser.id}`}>
              <img
                src={`${baseURL}/${currentUser.avatar}`}
                style={{ width: "40px", height: "40px", borderRadius: "20px" }}
              />
            </Link>
          </button>{" "}
          <button className="btn-link-auth">
            <Link to={`/create`} className="link">
              <IoMdAdd
                style={{ width: "25px", height: "25px" }}
                className="react-icon"
              />
              Publicar
            </Link>
          </button>
        </div>
      </section>
    )
  );
};
