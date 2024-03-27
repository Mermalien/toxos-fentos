import PropTypes from "prop-types";
import { userPropTypes } from "../../utils/customPropTypes";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUserService } from "../../services/userService";
import { AuthContext } from "../../context/AuthContext";

export const DeleteUser = ({ deleteUser }) => {
  const { id } = useParams();
  const idNumber = parseInt(id);
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDeleteUser = async (e) => {
    try {
      e.preventDefault();
      setError("");
      if (!email || !password) {
        setError("Debes introducir email y contraseña");
        return;
      }
      const body = await deleteUserService({
        id: idNumber,
        email,
        password,
      });

      if (!body || body.status === "error") {
        throw new Error(body.message);
      }
      deleteUser(currentUser.idNumber);
      window.location.reload();
      navigate("/");
    } catch (error) {
      setError(error.message);
      throw new Error(error.message);
    }
  };
  return (
    <div className="delete-page">
      <div className="delete-text">
        <p>
          Es una pena que decidas irte, pero puedes volver cuando quieras. Para
          eliminar tu cuenta debes introducir tu email y tu contraseña debajo.
        </p>
        <form onSubmit={handleDeleteUser}>
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
          <button>Eliminar definitivamente</button>
        </form>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

DeleteUser.propTypes = {
  user: userPropTypes,
  deleteUser: PropTypes.func,
};
