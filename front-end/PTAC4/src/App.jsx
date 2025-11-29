import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CadastrarMesas from './Pages/CadastrarMesas';
import ReservarMesas from './Pages/ReservarMesas';
import PaginaInicial from './Pages/PaginaInicial';
import ConsultarMesas from './Pages/ConsultarMesas';
import Cardapio from './Pages/Cardapio';

import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastrarmesa" element={<CadastrarMesas />} />
        <Route path="/reservarmesa" element={<ReservarMesas />} />
        <Route path="/consultarmesa" element={<ConsultarMesas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;