import "./SingleComment.css";
import PropTypes from "prop-types";
import { useState } from "react";
const baseURL = import.meta.env.VITE_APP_BACKEND;
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

export const CommentBody = ({ userId, text, name, avatar, createdAt }) => {
  const [showCommentContent, setShowCommentContent] = useState(false);

  // Días transcurridos desde que se publicó el comentario
  const calculateDaysPassed = (createdAt) => {
    const today = new Date();
    const createdWhen = new Date(createdAt);
    const differenceTime = today.getTime() - createdWhen.getTime();
    const differenceDays = Math.floor(differenceTime / (1000 * 3600 * 24));
    return differenceDays;
  };

  // Función para verificar si se publicó hoy
  const createdToday = (createdAt) => {
    const today = new Date();
    const createdWhen = new Date(createdAt);
    return (
      today.getDate() === createdWhen.getDate() &&
      today.getMonth() === createdWhen.getMonth() &&
      today.getFullYear() === createdWhen.getFullYear()
    );
  };

  return (
    <div className="comment-body">
      <div className="user-comment-data">
        <Link to={`/users/${userId}`}>{name}</Link>
        <section>
          {avatar && (
            <img
              src={`${baseURL}/${avatar}`}
              alt="usuario"
              className="user-comment-img"
            />
          )}
        </section>
      </div>
      <div className="comment-text">
        {showCommentContent ? text : `${text.substring(0, 20)}...`}
        {!showCommentContent ? (
          <button onClick={() => setShowCommentContent(true)}>
            <MdOutlineExpandMore className="react-icon" />
          </button>
        ) : (
          <button onClick={() => setShowCommentContent(false)}>
            <MdOutlineExpandLess className="react-icon" />
            {createdToday(createdAt) ? (
              <p>Publicado hoy.</p>
            ) : (
              <p>Hace {calculateDaysPassed(createdAt)} días.</p>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
CommentBody.propTypes = {
  userId: PropTypes.number,
  text: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  createdAt: PropTypes.string,
};
