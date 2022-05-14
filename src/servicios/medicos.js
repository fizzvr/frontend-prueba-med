import axios from 'axios';

export function getMedicos() {
  var apiurl = 'http://localhost:5000/api/cat_medicos/asignado';
  return axios.get(apiurl).then((response) => response.data);
}
