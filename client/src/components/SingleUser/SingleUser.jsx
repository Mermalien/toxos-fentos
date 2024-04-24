import "./SingleUser.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userPropTypes } from "../../utils/customPropTypes";
import { SingleUserData } from "./SingleUserData";
import { SlOptionsVertical } from "react-icons/sl";
import { LoadingComponent } from "../Loading/LoadingComponent";

export const SingleUser = ({ userId, user, setUser }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openOptions, setOpenOptions] = useState(false);

  const handleOptions = () => {
    try {
      setErrorMsg("");
      setOpenOptions(!openOptions);
      console.log("Click en", user.name);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="user-container">
      {user ? (
        <div className="user-item" key={userId}>
          <SingleUserData
            name={user?.name}
            avatar={user?.avatar}
            setUser={setUser}
          />
          <button
            className={`options ${openOptions ? "open" : ""}`}
            onClick={handleOptions}
          >
            <SlOptionsVertical
              className="options-icon"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
          {openOptions && (
            <div className="open-options">
              <button className="send-message">Enviar mensaje</button>
              <button className="visit-profile">
                <Link to={`/users/${userId}`}>Ver perfil</Link>
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Error al obtener usuario.</p>
      )}
      {loading ? <LoadingComponent /> : null}
      {errorMsg ? <p>{errorMsg}</p> : null}
    </div>
  );
};

SingleUser.propTypes = {
  user: userPropTypes,
  userId: PropTypes.number,
  setUser: PropTypes.func,
};
