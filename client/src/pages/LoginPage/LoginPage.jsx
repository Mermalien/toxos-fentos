import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginUserService } from "../../services/userService";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const body = await loginUserService({ email, password });

      if (body.status === "error") {
        throw new Error(body.message);
      }
      login(body.data.token);
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <section className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass">Contraseña</label>
          <input
            type={showPass ? "text" : "password"}
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
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

        <button className="login-button">Iniciar sesión</button>
        <section className="link-reg">
          <Link to={"/register"} className="link">
            <p>¿No tienes una cuenta? Regístrate aquí</p>
          </Link>
        </section>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </section>
  );
};
