import "./UsersList.css";
import { userPropTypes } from "../../utils/customPropTypes";
import PropTypes from "prop-types";
import { SingleUser } from "../SingleUser/SingleUser";
import { useState } from "react";
import { UsersSearcher } from "../Searcher/UsersSearcher";

export const UsersList = () => {
  const [allUsers, setAllUsers] = useState([]);
  console.log("Lista de usuarios", allUsers);

  return (
    <div className="usersList">
      <UsersSearcher setAllUsers={setAllUsers} className="list-searcher" />
      <h2>Resultados de la búsqueda</h2>

      {allUsers.map((user) => (
        <li key={user.name}>
          <SingleUser user={user} />
        </li>
      ))}
    </div>
  );
};
UsersList.propTypes = {
  user: userPropTypes,
  allUsers: PropTypes.arrayOf(userPropTypes),
  setAllUsers: PropTypes.func,
};
