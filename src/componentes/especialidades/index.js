import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  getEspecialidades,
  setEspecialidad,
  getEspecialidadID,
  updateEspecialidad,
  deleteEspecialidad
} from '../../servicios/especialidades';
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

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'nombreEspecialidad',
    headerName: 'ESPECIALIDAD',
    width: 200,
    sortable: false
  }
];

const Especialidades = () => {
  const [alert, setAlert] = useState(false);
  const [alertM, setAlertM] = useState(false);
  const [alertD, setAlertD] = useState(false);
  const [list, setList] = useState([]);
  const [data, setData] = useState();
  const { control, handleSubmit, reset } = useForm();
  const [open, setOpen] = React.useState(false);
  const [openModificar, setOpenModicar] = React.useState(false);
  const [especialidadUpdate, setEspecialidadUpdate] = React.useState([]);
  const dataDelete = data ? data[0] : '';

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
    let mounted = true;
    if (list.length && !alert) {
      return;
    }
    getEspecialidades().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, [alert, list]);

  useEffect(() => {
    let mounted = true;
    if (list.length && !alertM) {
      return;
    }
    getEspecialidades().then((items) => {
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
    getEspecialidades().then((items) => {
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
    setEspecialidad(data);
    setAlert(true);
    setOpen(false);
    reset();
  };

  const onSubmitModificar = async (data) => {
    const newData = {
      id: especialidadUpdate.id,
      nombreEspecialidad: data.nombreEspecialidad2
    };
    updateEspecialidad(newData);
    setEspecialidadUpdate([]);
    setAlertM(true);
    setOpenModicar(false);
    reset();
  };

  const onDelete = (item) => {
    deleteEspecialidad(item);
    setAlertD(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseModificar = () => {
    setEspecialidadUpdate([]);
    setOpenModicar(false);
  };

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
      <Typography variant='h4' gutterBottom>
        Lista de Especialidades
      </Typography>
      <Grid container direction='row' alignItems='top' justify='center'>
        <Grid item key={1} md={10} sm={6} xs={12}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={list}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowId={(row) => row.id}
              checkboxSelection
              onSelectionModelChange={(id) => {
                setData(id);
                getEspecialidadID(id).then((items) => {
                  setEspecialidadUpdate(items);
                });
              }}
              editMode='row'
            />
          </div>
        </Grid>
        <Grid item key={2} md={2} sm={6} xs={12}>
          <Box>
            <Button
              variant='outlined'
              onClick={handleClickOpen}
              sx={{ marginLeft: '10px ' }}
            >
              Nuevo
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Nueva Especialidad</DialogTitle>
              <DialogContent>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  flexDirection='column'
                >
                  <Controller
                    name='nombreEspecialidad'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        size='small'
                        color='success'
                        focused
                        id='nombreEspecialidad'
                        label='Especialidad'
                        variant='filled'
                        inputProps={{ style: { textTransform: 'uppercase' } }}
                      />
                    )}
                  />
                  <Button
                    sx={{ my: 5 }}
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
              variant='outlined'
              onClick={handleClickOpenModificar}
              sx={{ marginLeft: '10px ', my: '10px' }}
            >
              Modificar
            </Button>
            <Dialog open={openModificar} onClose={handleCloseModificar}>
              <DialogTitle>Modificar Especialidad</DialogTitle>
              <DialogContent>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  flexDirection='column'
                >
                  <Controller
                    name='nombreEspecialidad2'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        size='small'
                        color='success'
                        focused
                        id='nombreEspecialidad2'
                        label='Especialidad'
                        variant='filled'
                        inputProps={{ style: { textTransform: 'uppercase' } }}
                      />
                    )}
                  />
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Especialidades;
