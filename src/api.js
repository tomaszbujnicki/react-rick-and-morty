import axios from 'axios';

const API_ROOT = 'https://rickandmortyapi.com/api/';

const GET = {
  characters: (page = 1) => axios.get(API_ROOT + `character/?page=${page}`),
  locations: (page = 1) => axios.get(API_ROOT + `location/?page=${page}`),
  episodes: (page = 1) => axios.get(API_ROOT + `episode/?page=${page}`),

  character: (id) => axios.get(API_ROOT + `character/${id}`),
  location: (id) => axios.get(API_ROOT + `location/${id}`),
  episode: (id) => axios.get(API_ROOT + `episode/${id}`),

  filteredCharacters: (name) => axios.get(API_ROOT + `character/?name=${name}`),
};

export default GET;
