import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginUserService } from "../../services/userService";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            type="password"
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
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
