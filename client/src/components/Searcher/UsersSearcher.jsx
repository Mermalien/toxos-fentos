import "./Searcher.css";
import { useState } from "react";
import { getAllUsersService } from "../../services/userService";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { RiUserSearchLine } from "react-icons/ri";

export const UsersSearcher = ({ setAllUsers }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchPeople = async () => {
    try {
      setError("");
      setLoading(true);
      const users = await getAllUsersService(name);
      setAllUsers(users);
      navigate("/users");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="users-searcher">
      <input
        type="search"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Encuentra gente..."
      />
      <button type="button" onClick={() => handleSearchPeople()}>
        <RiUserSearchLine className="react-icon" />
      </button>
      {error && <p>{error}</p>}
      {loading ? <p>Buscando....</p> : null}
    </div>
  );
};

UsersSearcher.propTypes = {
  setAllUsers: PropTypes.func,
};
