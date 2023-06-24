import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search',
  params: {
    api_key: '3907f1e02c5af5a6eb040f19d19e5a97',
    language: 'es-ES',
  },
});

export default movieDB;
