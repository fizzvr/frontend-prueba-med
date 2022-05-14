import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getMedicos } from '../../servicios/medicos';

const getEspecialidad = (params) => {
  return `${params.value.nombreEspecialidad}`;
};

const getCiudad = (params) => {
  return `${params.value.nombreCiudad}`;
};

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'nombre', headerName: 'NOMBRE', width: 250, sortable: false },
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

export default function TablaDoctores() {
  const [data, setData] = useState();
  console.log('data', data);
  const [rowData, setRowData] = useState({});
  const [loaded, setLoaded] = useState(false);
  console.log('rowData', rowData);

  useEffect(() => {
    getMedicos().then((items) => {
      setRowData(items.nombre);
      setLoaded(true);
    });
    return () => setLoaded(false);
  }, []);

  if (loaded === false) {
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
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.id}
        checkboxSelection
        onSelectionModelChange={(id) => {
          setData(id);
        }}
        editMode='row'
      />
    </div>
  );
}
