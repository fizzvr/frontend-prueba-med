import axios from 'axios';

export function getEspecialidades() {
  var apiurl = 'http://localhost:5000/api/cat_especialidades';
  return axios.get(apiurl).then((response) => response.data);
}

export function getEspecialidadID(item) {
  return axios
    .get(`http://localhost:5000/api/cat_especialidades/${item}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

export function setEspecialidad(item) {
  return axios
    .post('http://localhost:5000/api/cat_especialidades', item)
    .then((reponse) => {
      console.log('reponse', reponse);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function updateEspecialidad(item) {
  return axios
    .put('http://localhost:5000/api/cat_especialidades', item)
    .then((reponse) => {
      console.log('reponse', reponse);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function deleteEspecialidad(item) {
  console.log('ASDASDASD', item)
  
  return axios
    .delete(`http://localhost:5000/api/cat_especialidades/${item}`)
    .then((reponse) => {
      console.log('reponse', reponse);
    })
    .catch((error) => {
      console.log(error);
    });
}
