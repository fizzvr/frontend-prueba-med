import React, { useEffect } from 'react';
import MainDoctores from '../componentes/medicos';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { getEspecialidades } from '../servicios/especialidades';
import { getCiudades } from '../servicios/ciudades';

const MedicosPagina = () => {
  const [ciudad, setCiudad] = React.useState('');
  const [especialidad, setEspecialidad] = React.useState('');
  const [ciudadElegida, setCiudadElegida] = React.useState('');
  const [especialidadElegida, setEspecialidadElegida] = React.useState('');

  let especialidades = especialidad;
  let ciudades = ciudad;

  const handleChangeMedicos = (event) => {
    setCiudadElegida(event.target.value);
  };
  const handleChangeEspecialidad = (event) => {
    setEspecialidadElegida(event.target.value);
  };

  useEffect(() => {
    getEspecialidades().then((items) => {
      setEspecialidad(items);
    });
  }, []);

  useEffect(() => {
    getCiudades().then((items) => {
      setCiudad(items);
    });
  }, []);

  return (
    <Container component='main' maxWidth='lg' sx={{ paddingTop: '40px' }}>
      <Paper sx={{ backgroundColor: '#ccc', padding: '15px' }}>
        <Box
          sx={{
            minWidth: 120,
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px'
          }}
        >
          <Typography variant='h4' gutterBottom component='div'>
            Lista Médicos
          </Typography>
          <FormControl sx={{ width: '300px' }}>
            <InputLabel id='ciudad'>Ciudad</InputLabel>
            <Select
              labelId='ciudad'
              id='ciudad'
              value={ciudadElegida ? ciudadElegida : ''}
              label='Ciudad'
              onChange={handleChangeMedicos}
            >
              {ciudades.length > 0 &&
                ciudades.map((item, index) => (
                  <MenuItem key={index} value={item.nombreCiudad}>
                    {item.nombreCiudad}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: '300px' }}>
            <InputLabel id='especialidad'>Especialidades</InputLabel>
            <Select
              labelId='especialidad'
              id='especialidad'
              value={especialidadElegida ? especialidadElegida : ''}
              label='Especialidades'
              onChange={handleChangeEspecialidad}
            >
              {especialidades.length > 0 &&
                especialidades.map((item, index) => (
                  <MenuItem key={index} value={item.nombreEspecialidad}>
                    {item.nombreEspecialidad}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        <MainDoctores />
      </Paper>
    </Container>
  );
};

export default MedicosPagina;
