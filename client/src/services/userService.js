const baseURL = import.meta.env.VITE_APP_BACKEND;

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
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.formData;
};

// Otros usuarios
export const getUsersDataService = async (id, token) => {
  const response = await fetch(`${baseURL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body.data;
};
