import "./UsersList.css";
import PropTypes from "prop-types";
import { userPropTypes } from "../../utils/customPropTypes";
import { UsersSearcher } from "../Searcher/UsersSearcher";
import { SingleUser } from "../SingleUser/SingleUser";
import { useState } from "react";

export const UsersList = ({ setUser }) => {
  const [allUsers, setAllUsers] = useState([]);
  console.log("UsersList", allUsers);

  return (
    <div className="usersList">
      <UsersSearcher
        allUsers={allUsers}
        setAllUsers={setAllUsers}
        className="list-searcher"
      />
      <div className="hr">
        <hr />
      </div>

      <ol>
        {allUsers &&
          allUsers.map((user, id) => {
            return (
              <li key={id}>
                <SingleUser user={user} setUser={setUser} />
              </li>
            );
          })}
      </ol>
    </div>
  );
};
UsersList.propTypes = {
  setUser: PropTypes.func,
  allUsers: PropTypes.arrayOf(userPropTypes),
  setAllUsers: PropTypes.func,
};
