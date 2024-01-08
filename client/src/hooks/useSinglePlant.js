import { useEffect, useState } from "react";
import { getSinglePlantService } from "../services/plantService";

export const useSinglePlant = (plantId) => {
  const [plant, setPlant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPlant = async () => {
      try {
        const data = await getSinglePlantService(plantId);
        setPlant(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPlant();
  }, [plantId]);
  return { plant, loading, error };
};
