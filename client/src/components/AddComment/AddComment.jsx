import { useContext, useState } from "react";
import { createCommentService } from "../../services/commentsService";
import { plantItemPropTypes, userPropTypes } from "../../utils/customPropTypes";
import { LoadingComponent } from "../Loading/LoadingComponent";
import { AuthContext } from "../../context/AuthContext";
import { getSinglePlantService } from "../../services/plantService";

export const AddComment = ({ plant }) => {
  const plantId = plant.id;
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log("comentario a la planta", plantId);
  console.log("comentario de", userId);

  const handleNewComment = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setError("");
      const formData = new FormData();
      formData.append("text", text);
      await getSinglePlantService(plantId);
      const body = await createCommentService(plantId, formData);
      if (body.status === "error") {
        throw new Error(body.message);
      }
      window.location.reload();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-comment-div">
      {plant ? (
        <form onSubmit={handleNewComment} className="add-comment-form">
          <input
            type="text"
            name="text"
            id={text}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder="Escribe aquí tu comentario"
          />
          <button>Enviar</button>
        </form>
      ) : null}
      {loading && <LoadingComponent />}
      {error && <p>{error}</p>}
    </div>
  );
};
AddComment.propTypes = {
  plant: plantItemPropTypes,
  user: userPropTypes,
};
