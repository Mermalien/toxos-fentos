const baseURL = import.meta.env.VITE_APP_BACKEND;
import { getToken } from "../utils/getToken";

// Registro
export const registerUserService = async (formData) => {
  const response = await fetch(`${baseURL}/register`, {
    method: "POST",
    body: formData,
  });
  const body = response.json();
  return body;
};

// Iniciar sesión
export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const body = await response.json();
  return body;
};

// Mis datos de usuario
export const getMyDataService = async (token) => {
  const response = await fetch(`${baseURL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.data;
};

// Actualizar mis datos de usuario
export const updateDataService = async (formData, token) => {
  const response = await fetch(`${baseURL}/user/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const body = await response.json();
  return body.data;
};

// Seleccionamos usuario por id
export const getUsersDataService = async (id, token) => {
  const response = await fetch(`${baseURL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.data;
};

// Lista de todos los usuarios de la app
export const getAllUsersService = async (name = "") => {
  const response = await fetch(`${baseURL}/users?name=${name}`);
  const body = await response.json();
  return body.data;
};

// Mi lista de favoritos
export const getMyFavoritesService = async () => {
  const token = getToken();
  const response = await fetch(`${baseURL}/user/favs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.data;
};

// Eliminar usuario
export const deleteUserService = async ({ id, email, password }) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/delete-user/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const body = await response.json();
  return body;
};
