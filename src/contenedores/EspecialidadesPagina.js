import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import MainEspecialidades from '../componentes/especialidades';

const EspecialidadesPagina = () => {
  return (
    <Container component='main' maxWidth='lg' sx={{ paddingTop: '50px' }}>
      <Paper sx={{ backgroundColor: '#ccc', padding: '15px' }}>
        <MainEspecialidades />
      </Paper>
    </Container>
  );
};

export default EspecialidadesPagina;
