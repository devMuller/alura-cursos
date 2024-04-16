import { uriAPI } from './api';
import axios from 'axios';

const teamsAPI = axios.create({
  baseURL: `${uriAPI}/equipes`,
});

const getTeams = async () => {
  const response = await teamsAPI.get('/');
  return response.data;
};

const postTeam = async (team) => {
  await teamsAPI.post(`/`, team);
};

const putTeam = async (team) => {
  await teamsAPI.put(`/${team.id}`, team);
};

export { getTeams, postTeam, putTeam };
