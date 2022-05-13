import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'nombre', headerName: 'NOMBRE', width: 250, sortable: false },
  { field: 'cedula', headerName: 'CEDULA', width: 150 },
  { field: 'ciudad', headerName: 'CIUDAD', width: 150 },
  { field: 'especialidad', headerName: 'ESPECIALIDAD', width: 150 },
  {
    field: 'foto',
    headerName: 'FOTO',
    width: 90
  }
];

const rows = [
  {
    id: 1,
    nombre: 'JHON DOE',
    cedula: '1719067777',
    ciudad: 'QUITO',
    especialidad: 'PEDIATRÍA',
    foto: 'https://source.unsplash.com/random'
  },
  {
    id: 2,
    nombre: 'LAURA DOE',
    cedula: '1719067744',
    ciudad: 'CUENCA',
    especialidad: 'ALERGOLOGÍA',
    foto: 'https://source.unsplash.com/random'
  }
];

export default function DataTable() {
  const [data, setData] = useState();
  console.log('data', data);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
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
