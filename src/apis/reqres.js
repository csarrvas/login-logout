import axios from 'axios';

const reqres = axios.create({ baseURL: 'https://reqres.in/api' });

export const registerNewUser = userData => {
  return reqres.post('/register', userData);
}