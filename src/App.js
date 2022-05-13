import React, { useEffect, useState } from 'react';
import BienvenidoPagina from './contenedores/BienvenidoPagina';
import Box from '@mui/material/Box';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Appbar from './componentes/appbar';
import Backdrop from '@mui/material/Backdrop';

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=yyDaMAY7Y33pfIbFveHIBJdOpb02ygmukFSTTeYk`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data === undefined) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color='secondary' />
      </Backdrop>
    );
  }
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url('${data.url}')`
      }}
    >
      <Appbar />
      <BienvenidoPagina />;
    </Box>
  );
};

export default App;
