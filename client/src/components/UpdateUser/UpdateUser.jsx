import { useContext, useState } from "react";
import { updateDataService } from "../../services/userService";
import { AuthContext } from "../../context/AuthContext";

export const UpdateUser = () => {
  const { token } = useContext(AuthContext);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [error, setError] = useState("");

  const updateData = async (e) => {
    try {
      e.preventDefault();
      setError("");

      const formData = new FormData();
      formData.append("name", newName);

      const body = await updateDataService(formData, token);
      if (body.status === "error") {
        throw new Error(body.message);
      }
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="update-data">
      <section className="update-user-form">
        <h3>Actualiza tus datos</h3>

        <form onSubmit={updateData} className="update-form">
          <fieldset>
            <label htmlFor="name">Nombre</label>
            <input
              type="name"
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            ></input>
          </fieldset>

          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            ></input>
          </fieldset>

          <fieldset>
            <label htmlFor="pass1">Contraseña</label>
            <input
              type="password"
              id="pass1"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            ></input>
          </fieldset>
          <fieldset>
            <label htmlFor="biografia">Bio</label>
            <input
              type="text"
              id="biografia"
              value={newBio}
              onChange={(e) => setNewBio(e.target.value)}
            ></input>
          </fieldset>

          <fieldset>
            <label htmlFor="avatar">Foto de perfil</label>
            <input
              type="file"
              name="avatar"
              id={newAvatar}
              accept={"image/*"}
              onChange={(e) => setNewAvatar(e.target.files[0])}
            ></input>
          </fieldset>

          <button className="update-btn">Actualizar</button>
        </form>
        {error && <p>{setError}</p>}
      </section>
    </div>
  );
};
