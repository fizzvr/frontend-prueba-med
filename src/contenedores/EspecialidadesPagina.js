import React, { useEffect, useState } from 'react';
import TablaEspecialidades from '../componentes/tablaEspecialidades';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const EspecialidadesPagina = () => {
  return (
    <Container component='main' maxWidth='lg' sx={{ paddingTop: '70px' }}>
      <Paper sx={{ backgroundColor: '#ccc', padding: '15px' }}>
        <Typography variant='h4' gutterBottom component='div'>
          Especialidades
        </Typography>
        <Grid container direction='row' alignItems='top' justify='center'>
          <Grid item key={1} md={10} sm={6} xs={12}>
            <TablaEspecialidades />
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

export default EspecialidadesPagina;
