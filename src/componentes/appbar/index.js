import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aire: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

export default function Superior() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' className={classes.aire}>
              Metrored - Prueba Técnica
            </Link>
          </Typography>
          <Button color='inherit' component={Link} to='/medicos'>
            Medicos
          </Button>
          <Button color='inherit' component={Link} to='/especialidades'>
            Especialidades
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
