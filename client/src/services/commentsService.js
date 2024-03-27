const baseURL = import.meta.env.VITE_APP_BACKEND;
import { getToken } from "../utils/getToken";

// Comentarios de cada publicación
export const getCommentsService = async (plantId) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/comments/${plantId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.data;
};

// Comentario por ID
export const getSingleCommentService = async (id) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/comments/comment/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body;
};

// Añadir comentario
export const createCommentService = async (plantId, FormData) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/comment/${plantId}`, {
    method: "POST",
    body: FormData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.data;
};

// Eliminar comentario
export const deleteCommentService = async (id) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/comment/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body;
};
