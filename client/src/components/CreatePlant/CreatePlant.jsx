import "./CreatePlant.css";
import { useState } from "react";
import { LoadingComponent } from "../Loading/LoadingComponent";
import { createPlantService } from "../../services/plantService";
import { useNavigate } from "react-router-dom";

export const CreatePlant = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (loading) return <LoadingComponent />;

  const handleNewPlant = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      if (image) formData.append("image", image);

      const body = await createPlantService(formData);
      if (body.status === "error") {
        throw new Error(body.message);
      }

      navigate("/");
      console.log(body);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="new-plant">
      <h2>Publicar</h2>
      <form onSubmit={handleNewPlant} className="add-plant-form">
        <fieldset>
          <label htmlFor="title">Titulo</label>
          <input
            type="title"
            name="title"
            id={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="text">Descripción</label>
          <input
            type="desription"
            name="description"
            id={description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Imagen</label>
          <input
            className="input-image"
            type="file"
            name="image"
            id={image}
            accept={"image/*"}
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="category">Tipo</label>
          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          >
            <option value="">Selecciona</option>
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
            <option value="aromaticas">Aromáticas</option>
            <option value="otro">Otro</option>
          </select>
        </fieldset>
        <button>Publicar</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>Publicando...</p> : null}
      </form>
    </div>
  );
};
