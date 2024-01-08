import { useEffect, useState } from "react";
import { listPlantsService } from "../services/plantService";

export const useAllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Listamos las plantas
  useEffect(() => {
    const getPlants = async () => {
      try {
        const data = await listPlantsService();
        setLoading(true);
        setPlants(data);
      } catch (err) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getPlants();
  }, [error]);

  const createPlant = (data) => {
    setPlants([data, ...plants]);
  };
  const deletePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  return { plants, setPlants, loading, error, createPlant, deletePlant };
};
