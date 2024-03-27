import "./SingleComment.css";
import PropTypes from "prop-types";
import { commentItemPropTypes } from "../../utils/customPropTypes";
import { CommentBody } from "./CommentBody";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { deleteCommentService } from "../../services/commentsService";
import { useComments } from "../../hooks/useComments";
import { RiDeleteBinLine } from "react-icons/ri";

export const SingleComment = ({ comment }) => {
  const { deleteComment } = useComments();
  const { currentUser } = useContext(AuthContext);
  const commentId = comment.id;
  const [error, setError] = useState("");
  const isMyComment = comment.userId === currentUser.id;

  // Eliminar el comentario si es mío
  const handleDeleteComment = async () => {
    try {
      setError("");
      console.log("CLICK EN ELIMINAR COMENTARIO", commentId);
      const body = await deleteCommentService(comment.id);
      console.log(body);
      if (!body || body.status === "error") {
        throw new Error(body.message);
      }
      deleteComment(commentId);
      window.location.reload();
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };
  return (
    <div className="single-comment">
      <ol>
        <CommentBody
          text={comment.text}
          name={comment.name}
          avatar={comment.avatar}
          createdAt={comment.createdAt}
        />
        {isMyComment ? (
          <button
            className="delete-comment-btn"
            onClick={() => {
              if (window.confirm("¿Quieres eliminar el comentario?"))
                handleDeleteComment(commentId);
            }}
          >
            <RiDeleteBinLine
              style={{
                width: "25px",
                height: "25px",
              }}
              className="react-icon"
            />
          </button>
        ) : null}
      </ol>
      {error && <p>{error}</p>}
    </div>
  );
};

SingleComment.propTypes = {
  comment: commentItemPropTypes,
  deleteComment: PropTypes.func,
};
