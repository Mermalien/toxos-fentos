import PropTypes from "prop-types";
import "./PlantComments.css";
import { SingleComment } from "../SingleComment/SingleComment";
import { useState } from "react";
import {
  commentItemPropTypes,
  plantItemPropTypes,
} from "../../utils/customPropTypes";

export const PlantComments = ({ plant, comments }) => {
  const [openComments, setOpenComments] = useState(false);
  // Comentarios en cada planta
  const commentsOfPlant = comments.filter(
    (comment) => comment.plantId === plant.id
  );
  const seeComments = () => {
    setOpenComments(!openComments);
  };

  // Comentarios recientes son los primeros en mostrarse
  const sortedComments = commentsOfPlant
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="comments-container">
      <h4 onClick={seeComments}>Comentarios</h4>
      <div className="open-comments">
        {openComments && (
          <ol>
            {sortedComments?.length > 0 &&
              sortedComments.map((commentItem) => (
                <li key={commentItem.id}>
                  <SingleComment comment={commentItem} plant={plant} />
                </li>
              ))}
          </ol>
        )}
      </div>
    </div>
  );
};
PlantComments.propTypes = {
  comments: PropTypes.arrayOf(commentItemPropTypes),
  setComments: PropTypes.func,
  plant: plantItemPropTypes,
};
