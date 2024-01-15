import { useEffect, useState } from "react";
import { getMyFavoritesService } from "../services/userService";

export const useMyFavs = (token) => {
  const [favs, setFavs] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFavs = async () => {
      try {
        const data = await getMyFavoritesService(token);
        setFavs(data);
        setLoading(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadFavs();
  }, [token]);
  return { favs, loading, error };
};
