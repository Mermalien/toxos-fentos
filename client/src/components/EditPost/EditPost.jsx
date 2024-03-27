import "./EditPost.css";
import { useState } from "react";
import { updatePlantService } from "../../services/plantService";
import { plantItemPropTypes } from "../../utils/customPropTypes";
import PropTypes from "prop-types";

export const EditPost = ({ plant }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setError("");
      const formData = new FormData();
      newTitle && formData.append("title", newTitle);
      newDescription && formData.append("description", newDescription);

      const body = await updatePlantService(formData, plant.id);
      if (body && body.status === "error") {
        throw new Error(body.message);
      }
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="update-post-container" key={plant?.id}>
      <div className="update-form-container">
        <form onSubmit={handleFormSubmit} className="update-plant-form">
          <fieldset>
            <label htmlFor="name">Título</label>
            <input
              type="text"
              name="title"
              id="title"
              value={newTitle}
              placeholder={newTitle || " " + (plant && plant?.title)}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="bio">Descripción</label>
            <textarea
              className="input-bio"
              type="text"
              id="description"
              value={newDescription}
              placeholder={
                newDescription || " " + (plant && plant?.description)
              }
              onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
          </fieldset>
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};
EditPost.propTypes = {
  plant: plantItemPropTypes,
  plantId: PropTypes.number,
};
