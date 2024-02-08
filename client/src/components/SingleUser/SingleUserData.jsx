import "./SingleUser.css";
const baseURL = import.meta.env.VITE_APP_BACKEND;
import PropTypes from "prop-types";

export const SingleUserData = ({ name, bio, avatar }) => {
  return (
    <div className="list-data">
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
      </div>
    </div>
  );
};

SingleUserData.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
};