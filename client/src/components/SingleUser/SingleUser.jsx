import "./SingleUser.css";
import { userPropTypes } from "../../utils/customPropTypes";
import { SingleUserData } from "./SingleUserData";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";

export const SingleUser = ({ user }) => {
  const { id } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const handleOptions = () => {
    try {
      setOpenOptions(!openOptions);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="user-container">
      <div className="user-item">
        <SingleUserData name={user.name} avatar={user.avatar} />
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
            <button>Enviar mensaje</button>
            <button>
              <Link to={`/users/${id}`}>Ver perfil</Link>
            </button>
          </div>
        )}
      </div>
      {errorMsg ? <p>{errorMsg}</p> : null}
    </div>
  );
};

SingleUser.propTypes = {
  user: userPropTypes,
};
