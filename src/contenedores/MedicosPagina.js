import React, { useEffect, useState } from 'react';
import TablaDoctores from '../componentes/tablaDoctores';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const MedicosPagina = () => {
  const [ciudad, setCiudad] = React.useState('');
  console.log('ciudad', ciudad)
  const [especialidad, setEspecialidad] = React.useState('');
  console.log('especialidad', especialidad)

  const handleChangeMedicos = (event) => {
    setCiudad(event.target.value);
  };
  const handleChangeEspecialidad = (event) => {
    setEspecialidad(event.target.value);
  };

  return (
    <Container component='main' maxWidth='lg' sx={{ paddingTop: '70px' }}>
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
            Medicos
          </Typography>
          <FormControl sx={{ width: '300px' }}>
            <InputLabel id='ciudad'>Ciudad</InputLabel>
            <Select
              labelId='ciudad'
              id='ciudad'
              value={ciudad}
              label='Ciudad'
              onChange={handleChangeMedicos}
            >
              <MenuItem value='QUITO'>QUITO</MenuItem>
              <MenuItem value='GUAYAQUIL'>GUAYAQUIL</MenuItem>
              <MenuItem value='CUENCA'>CUENCA</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '300px' }}>
            <InputLabel id='especialidad'>Especialidades</InputLabel>
            <Select
              labelId='especialidad'
              id='especialidad'
              value={especialidad}
              label='Especialidades'
              onChange={handleChangeEspecialidad}
            >
              <MenuItem value='ALERGOLOGÍA'>ALERGOLOGÍA</MenuItem>
              <MenuItem value='CARDIOLOGÍA'>CARDIOLOGÍA</MenuItem>
              <MenuItem value='CIRUGÍA GENERAL'>CIRUGÍA GENERAL</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container direction='row' alignItems='top' justify='center'>
          <Grid item key={1} md={10} sm={6} xs={12}>
            <TablaDoctores />
          </Grid>
          <Grid item key={2} md={2} sm={6} xs={12}>
            <Button
              variant='contained'
              color='success'
              component={Link}
              to='especialidades'
              sx={{ margin: '20px' }}
            >
              Nuevo
            </Button>
            <Button
              disabled={true}
              variant='contained'
              color='info'
              component={Link}
              to='especialidades'
              sx={{ margin: '20px' }}
            >
              Modificar
            </Button>
            <Button
              disabled={true}
              variant='contained'
              color='error'
              component={Link}
              to='especialidades'
              sx={{ margin: '20px' }}
            >
              Borrar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MedicosPagina;
