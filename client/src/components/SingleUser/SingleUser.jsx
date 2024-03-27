import "./SingleUser.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { userPropTypes } from "../../utils/customPropTypes";
import { SingleUserData } from "./SingleUserData";
import { SlOptionsVertical } from "react-icons/sl";

export const SingleUser = ({ user, setUser }) => {
  const { id } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  console.log("SingleUser", id);

  const handleOptions = () => {
    try {
      setErrorMsg("");
      setOpenOptions(!openOptions);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="user-container">
      <div className="user-item" key={user?.id}>
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
              <Link to={`/users/${id}`} className="link">
                Ver perfil
              </Link>
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
  setUser: PropTypes.func,
  allUsers: PropTypes.arrayOf(userPropTypes),
};
