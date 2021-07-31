import axios from 'axios';

const API_ROOT = 'https://rickandmortyapi.com/api/';

const GET = {
  character: (query = '') => axios.get(API_ROOT + `character/${query}`),
  location: (query = '') => axios.get(API_ROOT + `location/${query}`),
  episode: (query = '') => axios.get(API_ROOT + `episode/${query}`),
};

export default GET;
