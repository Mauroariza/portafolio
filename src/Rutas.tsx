
import { Routes, Route } from 'react-router-dom';
import MiHistoria from './MiHistoria';
import MiPasion from './MiPasion';
import App from './App';

const Rutas = () => (
  <Routes>
    <Route path="/mi-historia" element={<MiHistoria />} />
    <Route path="/mi-pasion" element={<MiPasion />} />
    <Route path="/" element={<App />} />
  </Routes>
);

export default Rutas;
