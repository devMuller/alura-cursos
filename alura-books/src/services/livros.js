import axios from 'axios';
import { uriAPI } from './api';

const livrosAPI = axios.create({
  baseURL: `${uriAPI}/livros`,
});

const getLivros = async () => {
  const response = await livrosAPI.get('/');
  return response.data;
};

export { getLivros };
