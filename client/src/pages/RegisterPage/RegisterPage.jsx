import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../../services/userService";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      setErrorMsg("");

      if (pass1 !== pass2) {
        setErrorMsg("Las contraseñas no coinciden");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", pass1);
      formData.append("bio", bio);

      if (avatar) formData.append("avatar", avatar);

      const body = await registerUserService(formData);

      if (body.status === "error") {
        throw new Error(body.message);
      }
      navigate("/login");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="register-page">
      <section className="register">
        <form onSubmit={handleRegister} className="register-form">
          <fieldset>
            <label htmlFor="name">Nombre</label>
            <input
              type="name"
              id="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </fieldset>

          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </fieldset>

          <fieldset>
            <label htmlFor="pass1">Contraseña</label>
            <input
              type={showPass ? "text" : "password"}
              id="pass1"
              value={pass1}
              required
              onChange={(e) => setPass1(e.target.value)}
            ></input>
            <button type="button" onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <FaRegEyeSlash className="show-pass-btn" />
              ) : (
                <FaRegEye className="show-pass-btn" />
              )}
            </button>
          </fieldset>

          <fieldset>
            <label htmlFor="pass2">Repite la contraseña</label>
            <input
              type={showPass ? "text" : "password"}
              id="pass2"
              value={pass2}
              required
              onChange={(e) => setPass2(e.target.value)}
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
            <label htmlFor="biografia">Algo sobre ti...</label>
            <input
              type="text"
              id="biografia"
              value={bio}
              required
              onChange={(e) => setBio(e.target.value)}
            ></input>
          </fieldset>

          <fieldset>
            <label htmlFor="avatar">Foto de perfil</label>
            <input
              type="file"
              name="avatar"
              id={avatar}
              accept={"image/*"}
              onChange={(e) => setAvatar(e.target.files[0])}
            ></input>
          </fieldset>

          <button className="register-btn">Registro</button>
        </form>
        {errorMsg && <p>{errorMsg}</p>}
      </section>
    </div>
  );
};
