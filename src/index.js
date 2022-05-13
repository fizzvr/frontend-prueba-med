import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BienvenidoPagina from './contenedores/BienvenidoPagina';
import MedicosPagina from './contenedores/MedicosPagina';
import EspecialidadesPagina from './contenedores/EspecialidadesPagina';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<BienvenidoPagina />} />
        <Route path='medicos' element={<MedicosPagina />} />
        <Route path='especialidades' element={<EspecialidadesPagina />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
