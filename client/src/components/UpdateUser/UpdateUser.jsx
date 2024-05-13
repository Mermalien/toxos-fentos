import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateDataService } from "../../services/userService";
import { AuthContext } from "../../context/AuthContext";
import "./UpdateUser.css";
import { updateUserPropTypes } from "../../utils/customPropTypes";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

export const UpdateUser = () => {
  const navigate = useNavigate();
  const { token, currentUser } = useContext(AuthContext);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [newBio, setNewBio] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [error, setError] = useState("");

  const updateData = async (e) => {
    try {
      e.preventDefault();
      setError("");

      const formData = new FormData();
      newName && formData.append("name", newName);
      newEmail && formData.append("email", newEmail);
      newPass && formData.append("password", newPass);
      newBio && formData.append("bio", newBio);
      newAvatar && formData.append("avatar", newAvatar);

      const body = await updateDataService(formData, token);
      if (body.status === "error") {
        throw new Error(body.message);
      }
      alert("Actualizado correctamente");
      window.location.reload();
      navigate("/");
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
              placeholder={newName || " " + (currentUser && currentUser.name)}
              onChange={(e) => setNewName(e.target.value)}
            ></input>
          </fieldset>

          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={newEmail}
              placeholder={newEmail || " " + (currentUser && currentUser.email)}
              onChange={(e) => setNewEmail(e.target.value)}
            ></input>
          </fieldset>

          <fieldset className="pass-fieldset">
            <label htmlFor="pass1">Contraseña</label>
            <input
              type={showPass ? "text" : "password"}
              id="pass"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            ></input>
            <button
              type="button"
              className="show-pass-btn"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <FaRegEyeSlash className="show-pass-btn" />
              ) : (
                <FaRegEye className="show-pass-btn" />
              )}
            </button>
          </fieldset>
          <fieldset>
            <label htmlFor="bio">Biografía</label>
            <textarea
              className="input-bio"
              type="text"
              id="bio"
              value={newBio}
              placeholder={newBio || " " + (currentUser && currentUser.bio)}
              onChange={(e) => setNewBio(e.target.value)}
            ></textarea>
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
        {error && <p>{error}</p>}
      </section>
    </div>
  );
};
UpdateUser.propTypes = {
  user: updateUserPropTypes,
};
