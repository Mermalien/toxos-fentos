const baseURL = import.meta.env.VITE_APP_BACKEND;
import { getToken } from "../utils/getToken";

// Lista de publicaciones
export const listPlantsService = async (title = "", category = "") => {
  const response = await fetch(
    `${baseURL}/plants?title=${title}&category=${category}`
  );
  const body = await response.json();
  return body.data;
};

// Publicación concreta
export const getSinglePlantService = async (plantId) => {
  const response = await fetch(`${baseURL}/plants/${plantId}`);
  const body = await response.json();
  return body;
};

// Publicar nuevo
export const createPlantService = async (FormData) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/create`, {
    method: "POST",
    body: FormData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.data;
};

// Editar publicación
export const updatePlantService = async (FormData, plantId) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/plant/${plantId}/update`, {
    method: "PUT",
    body: FormData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.data;
};

// Eliminar publicación
export const deletePlantService = async (plantId) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/delete/${plantId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body;
};

// Marcar como favorito
export const handleFavService = async (plantId) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/fav/${plantId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body;
};
