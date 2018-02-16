import axios from 'axios';

// TODO - configure webpack to make this configurable
const URI = 'http://localhost:3000'

const signUp = username => {
  return axios.post(`${URI}/users`, {
    username
  });
}

const authenticate = ({ username, password }) => {
  return axios.post(`${URI}/auth`, {
    username, password 
  })
}

const getDoors = () => axios.get(`${URI}/doors`);
const createDoor = name => axios.post(`${URI}/doors`, { name });

module.exports = {
  signUp,
  authenticate,
  getDoors,
  createDoor,
};
