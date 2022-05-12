import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Medicos from '../componentes/medicos';
import Especialidades from '../componentes/especialidades';

const BienvenidoPagina = () => (
  <Container component='main' maxWidth='lg'>
    <Grid container spacing={4}>
      <Grid item key={1} md={6} sm={6} xs={12}>
        <Medicos />
      </Grid>
      <Grid item key={1} md={6} sm={6} xs={12}>
        <Especialidades />
      </Grid>
    </Grid>
  </Container>
);

export default BienvenidoPagina;
