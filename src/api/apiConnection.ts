import axios from "axios";
// import Cookie from 'js-cookie';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  async (config) => {
    // const token = Cookie.get('Token');
    // console.log(token)
    // if (!config.headers['Authorization']) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;