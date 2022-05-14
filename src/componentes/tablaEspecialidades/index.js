import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getEspecialidades } from '../../servicios/especialidades';

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'nombreEspecialidad',
    headerName: 'ESPECIALIDAD',
    width: 200,
    sortable: false
  }
];

export default function DataTable() {
  const [data, setData] = useState();
  const [rowData, setRowData] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getEspecialidades().then((items) => {
      setRowData(items);
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
    <div style={{ height: 400, width: '100%' }}>
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
