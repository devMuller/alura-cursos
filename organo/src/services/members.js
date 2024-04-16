import { uriAPI } from './api';
import axios from 'axios';

const membersAPI = axios.create({
  baseURL: `${uriAPI}/membros`,
});

const getMembers = async () => {
  const response = await membersAPI.get('/');
  return response.data;
};

const postMember = async (member) => {
  console.log(member);
  await membersAPI.post(`/`, member);
};

const deleteMember = async (id) => {
  await membersAPI.delete(`${id}`);
};

export { getMembers, postMember, deleteMember };
