import axios from 'axios';

module.exports = async function () {
  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ?? '8081';
  axios.defaults.baseURL = `http://${host}:${port}`;
};
