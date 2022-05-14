import axios from 'axios';

export function getCiudades() {
  var apiurl = 'http://localhost:5000/api/cat_ciudades';
  return axios.get(apiurl).then((response) => response.data);
}
