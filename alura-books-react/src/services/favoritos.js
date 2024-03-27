import axios from 'axios';
import { uriAPI } from './api';

const favoritosAPI = axios.create({
  baseURL: `${uriAPI}/favoritos`,
});

const getFavoritos = async () => {
  const response = await favoritosAPI.get('/');
  return response.data;
};

const postFavorito = async (id) => {
  await favoritosAPI.post(`/${id}`);
};

const deleteFavorito = async (id) => {
  await favoritosAPI.delete(`/${id}`);
};

export { getFavoritos, deleteFavorito, postFavorito };
