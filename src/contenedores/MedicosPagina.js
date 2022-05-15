import React from 'react';
import MainDoctores from '../componentes/medicos';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const MedicosPagina = () => {
  return (
    <Container component='main' maxWidth='lg' sx={{ paddingTop: '40px' }}>
      <Paper sx={{ backgroundColor: '#ccc', padding: '15px' }}>
        <MainDoctores />
      </Paper>
    </Container>
  );
};

export default MedicosPagina;
