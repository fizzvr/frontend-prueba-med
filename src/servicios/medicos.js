import axios from 'axios';

export function getMedicos() {
  var apiurl = 'http://localhost:5000/api/cat_medicos/asignado';
  return axios.get(apiurl).then((response) => response.data);
}

export function setMedicos(item) {
  return axios
    .post('http://localhost:5000/api/cat_medicos', item)
    .then((reponse) => {
      console.log('reponse', reponse);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getMedicosID(item) {
  return axios
    .get(`http://localhost:5000/api/cat_medicos/${item}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

export function updateMedico(item) {
  return axios
    .put('http://localhost:5000/api/cat_medicos', item)
    .then((reponse) => {
      console.log('reponse', reponse);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function deleteMedico(item) {
 
  return axios
    .delete(`http://localhost:5000/api/cat_medicos/${item}`)
    .then((reponse) => {
      console.log('reponse', reponse);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getMedicosporCiudad(item) {
  return axios
    .get(`http://localhost:5000/api/cat_medicos/asignado?ciudad=${item}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

export function getMedicosporEspecialidad(item) {
  return axios
    .get(`http://localhost:5000/api/cat_medicos/asignado?especialidad=${item}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

