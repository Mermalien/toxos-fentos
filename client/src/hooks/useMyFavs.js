import { useEffect, useState } from "react";
import { getMyFavoritesService } from "../services/userService";

export const useMyFavs = (token) => {
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refetch, setRefetch] = useState(() => {});

  useEffect(() => {
    const loadFavs = async () => {
      try {
        const data = await getMyFavoritesService();
        setFavs(data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    setRefetch(() => loadFavs);
    loadFavs();
  }, [token]);
  return { favs, setFavs, loading, error, refetch };
};
