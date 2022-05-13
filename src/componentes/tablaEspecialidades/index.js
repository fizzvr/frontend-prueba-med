import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'especialidad',
    headerName: 'ESPECIALIDAD',
    width: 200,
    sortable: false
  }
];

const rows = [
  {
    id: 1,
    especialidad: 'ALERGOLOGÍA'
  },
  {
    id: 2,
    especialidad: 'CARDIOLOGÍA'
  },
  {
    id: 3,
    especialidad: 'CIRUGÍA GENERAL'
  },
  {
    id: 4,
    especialidad: 'PEDIATRÍA'
  },
  {
    id: 5,
    especialidad: 'ODONTOLOGÍA'
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
