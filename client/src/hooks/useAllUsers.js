import { useEffect, useState } from "react";
import { getAllUsersService } from "../services/userService";

export const useAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getAllUsersService();
        setLoading(true);
        setAllUsers(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [error]);

  return { allUsers, setAllUsers, loading, error };
};
