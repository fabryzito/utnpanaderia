import axios from "axios";

const API = "http://localhost:3001";

export const getProductos = () => axios.get(`${API}/productos`);
export const getProducto = (id) => axios.get(`${API}/productos/${id}`);
export const createProducto = (data) => axios.post(`${API}/productos`, data);
export const updateProducto = (id, data) =>
  axios.put(`${API}/productos/${id}`, data);
export const deleteProducto = (id) => axios.delete(`${API}/productos/${id}`);

export const getUsuarios = () => axios.get(`${API}/usuarios`);
export const getUsuario = (id) => axios.get(`${API}/usuarios/${id}`);
export const createUsuario = (data) => axios.post(`${API}/usuarios`, data);
export const updateUsuario = (id, data) =>
  axios.put(`${API}/usuarios/${id}`, data);
export const deleteUsuario = (id) => axios.delete(`${API}/usuarios/${id}`);
