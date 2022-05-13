import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const BienvenidoPagina = () => {
  return (
    <Container component='main' maxWidth='xs' sx={{ padding: '150px' }}>
      <Paper sx={{ backgroundColor: '#ccc', padding: '15px' }}>
        <Grid container direction='column' alignItems='center' justify='center'>
          <Typography variant='h2' gutterBottom component='div'>
            Metrored
          </Typography>
          <Grid item key={1} md={6} sm={6} xs={12}>
            <Button
              variant='contained'
              color='secondary'
              component={Link}
              to='medicos'
              sx={{ margin: '20px' }}
            >
              Nuestros Medicos
            </Button>
          </Grid>
          <Grid item key={2} md={6} sm={6} xs={12}>
            <Button
              variant='contained'
              color='secondary'
              component={Link}
              to='especialidades'
              sx={{ margin: '20px' }}
            >
              Nuestras Especialidades
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BienvenidoPagina;
