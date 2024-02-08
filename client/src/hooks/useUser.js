import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUsersDataService } from "../services/userService";

export const useUser = (id) => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getUsersDataService(id, token);
        setUser(data);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id, token]);
  return { user, setUser, loading, errorMsg };
};
