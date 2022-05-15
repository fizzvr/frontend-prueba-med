import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import {
  getMedicos,
  setMedicos,
  getMedicosID,
  updateMedico,
  deleteMedico,
  getMedicosporCiudad,
  getMedicosporEspecialidad
} from '../../servicios/medicos';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { getEspecialidades } from '../../servicios/especialidades';
import { getCiudades } from '../../servicios/ciudades';
import Typography from '@mui/material/Typography';

const getEspecialidad = (params) => {
  return `${params.value.nombreEspecialidad}`;
};

const getCiudad = (params) => {
  return `${params.value.nombreCiudad}`;
};

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'nombre', headerName: 'MÉDICO', width: 250, sortable: false },
  { field: 'cedula', headerName: 'CEDULA', width: 150 },
  {
    field: 'cat_ciudades',
    headerName: 'CIUDAD',
    width: 150,
    valueGetter: getCiudad
  },
  {
    field: 'cat_especialidades',
    headerName: 'ESPECIALIDAD',
    width: 150,
    valueGetter: getEspecialidad
  },
  {
    field: 'foto',
    headerName: 'FOTO',
    width: 90
  }
];
const Medicos = () => {
  const [alert, setAlert] = useState(false);
  const [alertM, setAlertM] = useState(false);
  const [alertD, setAlertD] = useState(false);
  const [alertC, setAlertC] = useState(false);
  const [alertE, setAlertE] = useState(false);
  const [list, setList] = useState([]);
  const [data, setData] = useState();
  const [open, setOpen] = React.useState(false);
  const [openModificar, setOpenModicar] = React.useState(false);
  const [medicoUpdate, setMedicoUpdate] = React.useState([]);
  const dataDelete = data ? data[0] : '';
  const [ciudad, setCiudad] = React.useState('');
  const [especialidad, setEspecialidad] = React.useState('');

  const [ciudadConsulta, setCiudadConsulta] = React.useState('');
  const [especialidadConsulta, setEspecialidadConsulta] = React.useState('');
  const [ciudadElegida, setCiudadElegida] = React.useState('');
  const [especialidadElegida, setEspecialidadElegida] = React.useState('');

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      nombre: '',
      cedula: '',
      ciudad_id: '',
      especialidad_id: '',
      foto: ''
    }
  });
  const { reset, control, handleSubmit } = methods;

  let ciudades = ciudad;

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

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }, [alert]);

  useEffect(() => {
    if (alertM) {
      setTimeout(() => {
        setAlertM(false);
      }, 2000);
    }
  }, [alertM]);

  useEffect(() => {
    if (alertD) {
      setTimeout(() => {
        setAlertD(false);
      }, 2000);
    }
  }, [alertD]);
  useEffect(() => {
    if (alertC) {
      setTimeout(() => {
        setAlertC(false);
      }, 2000);
    }
  }, [alertC]);
  useEffect(() => {
    if (alertE) {
      setTimeout(() => {
        setAlertE(false);
      }, 2000);
    }
  }, [alertE]);

  useEffect(() => {
    let mounted = true;
    if (list.length && !alert) {
      return;
    }
    getMedicos().then((items) => {
      if (mounted) {
        setList(items.nombre);
      }
    });
    return () => (mounted = false);
  }, [alert, list]);

  useEffect(() => {
    let mounted = true;
    if (list.length && !alertM) {
      return;
    }
    getMedicos().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, [alertM, list]);

  useEffect(() => {
    let mounted = true;
    if (list.length && !alertD) {
      return;
    }
    getMedicos().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, [alertD, list]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenModificar = () => {
    setOpenModicar(true);
  };

  const onSubmit = async (data) => {
    setMedicos(data);
    setAlert(true);
    setOpen(false);
    reset();
  };

  const onSubmitModificar = async (data) => {
    console.log('data', data);

    const newData = {
      id: medicoUpdate.id,
      nombre: data.nombre_update,
      cedula: data.cedula_update,
      foto: data.foto_update,
      especialidad_id: data.especialidad_id_update,
      ciudad_id: data.ciudad_id_update
    };
    updateMedico(newData);
    setMedicoUpdate([]);
    setAlertM(true);
    setOpenModicar(false);
    reset();
  };

  const onDelete = (item) => {
    deleteMedico(item);
    setAlertD(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseModificar = () => {
    setMedicoUpdate([]);
    setOpenModicar(false);
  };

  const handleChangeCiudad = (event) => {
    getMedicosporCiudad(event.target.value).then((items) => {
      setCiudadElegida(items.nombre);
      setAlertC(true);
    });
  };
  const handleChangeEspecialidad = (event) => {
    getMedicosporEspecialidad(event.target.value).then((items) => {
      setEspecialidadElegida(items.nombre);
      setAlertE(true);
    });
  };

  useEffect(() => {
    getEspecialidades().then((items) => {
      setEspecialidadConsulta(items);
    });
  }, []);

  useEffect(() => {
    getCiudades().then((items) => {
      setCiudadConsulta(items);
    });
  }, []);

  if (list === undefined) {
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
    <div className='wrapper'>
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
            value={''}
            label='Ciudad'
            onChange={handleChangeCiudad}
          >
            {ciudadConsulta.length > 0 &&
              ciudadConsulta.map((item, index) => (
                <MenuItem key={index} value={item.id}>
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
            value={''}
            label='Especialidades'
            onChange={handleChangeEspecialidad}
          >
            {especialidadConsulta.length > 0 &&
              especialidadConsulta.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.nombreEspecialidad}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Grid container direction='row' alignItems='top' justify='center'>
        <Grid item key={1} md={10} sm={6} xs={12}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={
                ciudadElegida
                  ? ciudadElegida
                  : especialidadElegida
                  ? especialidadElegida
                  : list
              }
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowId={(row) => row.id}
              checkboxSelection
              onSelectionModelChange={(id) => {
                setData(id);
                getMedicosID(id).then((items) => {
                  setMedicoUpdate(items);
                });
              }}
              editMode='row'
            />
          </div>
        </Grid>
        <Grid item key={2} md={2} sm={6} xs={12}>
          <Box>
            <Button
              variant='contained'
              color='success'
              onClick={handleClickOpen}
              sx={{ marginLeft: '10px ' }}
            >
              Nuevo
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Nuevo Ingreso</DialogTitle>
              <DialogContent>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  flexDirection='column'
                >
                  <Controller
                    name='nombre'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        sx={{ my: '10px' }}
                        fullWidth
                        {...field}
                        size='small'
                        focused
                        id='nombre'
                        label='Nombre'
                        variant='filled'
                        inputProps={{ style: { textTransform: 'uppercase' } }}
                      />
                    )}
                  />
                  <Controller
                    name='cedula'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        sx={{ my: '10px' }}
                        fullWidth
                        {...field}
                        size='small'
                        focused
                        id='cedula'
                        label='Cédula'
                        variant='filled'
                        inputProps={{ style: { textTransform: 'uppercase' } }}
                      />
                    )}
                  />
                  <Controller
                    name='foto'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        sx={{ my: '10px' }}
                        fullWidth
                        {...field}
                        size='small'
                        focused
                        id='foto'
                        label='Foto'
                        variant='filled'
                        inputProps={{ style: { textTransform: 'uppercase' } }}
                      />
                    )}
                  />

                  <FormControl fullWidth sx={{ my: 2 }}>
                    <InputLabel
                      color='secondary'
                      id='demo-simple-select-label-provincia'
                    >
                      Ciudad *
                    </InputLabel>

                    <Controller
                      name='ciudad_id'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <Select
                          {...field}
                          color='secondary'
                          labelId='demo-simple-select-label-provincia'
                          id='demo-simple-select'
                          label='Ciudad *'
                        >
                          {ciudades.length > 0 &&
                            ciudades.map((item, index) => (
                              <MenuItem key={index} value={item.id}>
                                {item.nombreCiudad}
                              </MenuItem>
                            ))}
                        </Select>
                      )}
                    />
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel
                      color='secondary'
                      id='demo-simple-select-label-provincia'
                    >
                      Especialidad *
                    </InputLabel>

                    <Controller
                      name='especialidad_id'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <Select
                          {...field}
                          color='secondary'
                          labelId='demo-simple-select-label-provincia'
                          id='demo-simple-select'
                          label='Especialidad *'
                        >
                          {especialidad.length > 0 &&
                            especialidad.map((item, index) => (
                              <MenuItem key={index} value={item.id}>
                                {item.nombreEspecialidad}
                              </MenuItem>
                            ))}
                        </Select>
                      )}
                    />
                  </FormControl>

                  <Button
                    sx={{ my: 1 }}
                    fullWidth
                    size='small'
                    variant='contained'
                    color='secondary'
                    onClick={handleSubmit(onSubmit)}
                  >
                    Agregar
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
          <Box>
            <Button
              variant='contained'
              color='info'
              onClick={handleClickOpenModificar}
              sx={{ marginLeft: '10px ', my: '10px' }}
            >
              Modificar
            </Button>
            <Dialog open={openModificar} onClose={handleCloseModificar}>
              <DialogTitle>Modificar Item</DialogTitle>
              <DialogContent>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  flexDirection='column'
                >
                  <Controller
                    name='nombre_update'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        sx={{ mb: '10px' }}
                        fullWidth
                        {...field}
                        size='small'
                        focused
                        id='nombre_update'
                        label='Nombre'
                        variant='filled'
                        inputProps={{ style: { textTransform: 'uppercase' } }}
                      />
                    )}
                  />
                  <Controller
                    name='cedula_update'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        sx={{ mb: '10px' }}
                        fullWidth
                        {...field}
                        size='small'
                        focused
                        id='cedula_update'
                        label='Cédula'
                        variant='filled'
                        inputProps={{ style: { textTransform: 'uppercase' } }}
                      />
                    )}
                  />
                  <Controller
                    name='foto_update'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        sx={{ mb: '10px' }}
                        fullWidth
                        {...field}
                        size='small'
                        focused
                        id='foto_update'
                        label='Foto'
                        variant='filled'
                        inputProps={{ style: { textTransform: 'uppercase' } }}
                      />
                    )}
                  />
                  <FormControl fullWidth sx={{ mb: '10px' }}>
                    <InputLabel
                      color='secondary'
                      id='demo-simple-select-label-provincia'
                    >
                      Ciudad *
                    </InputLabel>

                    <Controller
                      name='ciudad_id_update'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <Select
                          {...field}
                          color='secondary'
                          labelId='demo-simple-select-label-provincia'
                          id='ciudad_id_update'
                          label='Ciudad *'
                        >
                          {ciudades.length > 0 &&
                            ciudades.map((item, index) => (
                              <MenuItem key={index} value={item.id}>
                                {item.nombreCiudad}
                              </MenuItem>
                            ))}
                        </Select>
                      )}
                    />
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel
                      color='secondary'
                      id='demo-simple-select-label-provincia'
                    >
                      Especialidad *
                    </InputLabel>

                    <Controller
                      name='especialidad_id_update'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <Select
                          {...field}
                          color='secondary'
                          labelId='demo-simple-select-label-provincia'
                          id='especialidad_id_update'
                          label='Especialidad *'
                        >
                          {especialidad.length > 0 &&
                            especialidad.map((item, index) => (
                              <MenuItem key={index} value={item.id}>
                                {item.nombreEspecialidad}
                              </MenuItem>
                            ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                  <Button
                    sx={{ my: 5 }}
                    fullWidth
                    size='small'
                    variant='contained'
                    color='secondary'
                    onClick={handleSubmit(onSubmitModificar)}
                  >
                    Modificar
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
          <Box>
            <Button
              variant='contained'
              color='error'
              onClick={() => onDelete(dataDelete)}
              sx={{ marginLeft: '10px ' }}
            >
              Borrar
            </Button>
          </Box>
          {alert && (
            <Alert severity='success' sx={{ m: 2 }}>
              Especialidad agregada correctamente!
            </Alert>
          )}
          {alertM && (
            <Alert severity='success' sx={{ m: 2 }}>
              Especialidad modificada correctamente!
            </Alert>
          )}
          {alertD && (
            <Alert severity='error' sx={{ m: 2 }}>
              Eliminada correctamente!
            </Alert>
          )}
          {alertC && (
            <Alert severity='success' sx={{ m: 2 }}>
              {ciudadElegida ? ciudadElegida.length : ' '} Médicos por ciudad
            </Alert>
          )}
          {alertE && (
            <Alert severity='success' sx={{ m: 2 }}>
              {especialidadElegida ? especialidadElegida.length : ' '} Médicos
              por especialidad
            </Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Medicos;
