import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastrarMesas from './Pages/CadastrarMesas';
import ReservarMesas from './Pages/ReservarMesas';
import PaginaInicial from './Pages/PaginaInicial';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastrarmesa" element={<CadastrarMesas />} />
        <Route path="/reservarmesa" element={<ReservarMesas />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
