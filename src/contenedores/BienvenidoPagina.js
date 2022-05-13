import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Medicos from '../componentes/medicos';
import Especialidades from '../componentes/especialidades';
import axios from 'axios';

const BienvenidoPagina = () => {
  return (
    <Container component='main' maxWidth='lg' sx={{ padding: '150px' }}>
      <Grid
        container
        spacing={6}
        direction='column'
        alignItems='center'
        justify='center'
      >
        <Grid item key={1} md={6} sm={6} xs={12}>
          <Medicos />
        </Grid>
        <Grid item key={2} md={6} sm={6} xs={12}>
          <Especialidades />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BienvenidoPagina;
