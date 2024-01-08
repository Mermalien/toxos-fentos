import "./Auth.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
const baseURL = import.meta.env.VITE_APP_BACKEND;

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section className="auth-btns">
      <div className="logged-btns">
        <button className="btn-link-auth">
          <Link to={`/users/${user.id}`}>
            <img
              src={`${baseURL}/${user.avatar}`}
              style={{ width: "40px", height: "40px", borderRadius: "20px" }}
            />
            {user.name}
          </Link>
        </button>{" "}
        <button className="btn-link-auth">
          <Link to={`/create`}>
            <IoMdAdd style={{ width: "25px", height: "25px" }} />
            Publicar
          </Link>
        </button>
        <button className="logout-btn" onClick={() => logout()}>
          <MdOutlinePowerSettingsNew
            style={{ width: "25px", height: "25px" }}
          />
        </button>
      </div>
    </section>
  ) : (
    <section className="auth-btns">
      <div className="session-btns">
        <p>
          <Link to={`/login`} className="p-link">
            LOGIN
          </Link>
        </p>
        <p>
          <Link to={`/register`} className="p-link">
            REGISTRO
          </Link>
        </p>
      </div>
    </section>
  );
};
