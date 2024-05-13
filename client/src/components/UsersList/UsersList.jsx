import "./UsersList.css";
import PropTypes from "prop-types";
import { userPropTypes } from "../../utils/customPropTypes";
import { UsersSearcher } from "../Searcher/UsersSearcher";
import { SingleUser } from "../SingleUser/SingleUser";
import { useEffect, useState } from "react";
import { LoadingComponent } from "../Loading/LoadingComponent";
import { getAllUsersService } from "../../services/userService";

export const UsersList = ({ setUser }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const data = await getAllUsersService();
        setAllUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [error]);

  return (
    <>
      <div className="usersList">
        <UsersSearcher
          allUsers={allUsers}
          setAllUsers={setAllUsers}
          className="list-searcher"
        />

        <hr className="hr" />

        {allUsers &&
          allUsers.map((user, userId) => {
            return (
              <li key={userId}>
                <SingleUser user={user} userId={user.id} setUser={setUser} />
              </li>
            );
          })}

        {loading ? <LoadingComponent /> : null}
        {error ? <p>{error.message}</p> : null}
      </div>
    </>
  );
};
UsersList.propTypes = {
  user: userPropTypes,
  userId: PropTypes.number,
  setUser: PropTypes.func,
  allUsers: PropTypes.arrayOf(userPropTypes),
  setAllUsers: PropTypes.func,
};
