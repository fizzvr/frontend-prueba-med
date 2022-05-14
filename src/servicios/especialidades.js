import axios from 'axios';

export function getEspecialidades() {
  var apiurl = 'http://localhost:5000/api/cat_especialidades';
  return axios.get(apiurl).then((response) => response.data);
}
