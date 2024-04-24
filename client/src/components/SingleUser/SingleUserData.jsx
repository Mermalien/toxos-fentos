import "./SingleUser.css";
const baseURL = import.meta.env.VITE_APP_BACKEND;
import PropTypes from "prop-types";

export const SingleUserData = ({ id, name, bio, avatar }) => {
  // TODO => Mostrar/ocultar bio si es muy larga.
  return (
    <div className="list-data" key={id}>
      <div className="avatar-container">
        {avatar && (
          <img
            src={`${baseURL}/${avatar}`}
            alt="foto de perfil"
            className="avatar"
          />
        )}
      </div>
      <div className="info-container">
        <p>{name}</p>
        <p>{bio}</p>
        {id}
      </div>
    </div>
  );
};

SingleUserData.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
};
