import React, { useState } from 'react';
import styles from './CadastrarMesas.module.css';

const CadastrarMesas = () => {
  const [mesas, setMesas] = useState([]);
  const [numeroMesa, setNumeroMesa] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [status, setStatus] = useState('disponível');
  const [editarId, setEditarId] = useState(null);

  const salvarMesa = () => {
    if (!numeroMesa || !capacidade) {
      alert('Preencha todos os campos');
      return;
    }

    const novaMesa = {
      id: editarId || numeroMesa,
      numero: numeroMesa,
      capacidade: parseInt(capacidade),
      status,
    };

    if (editarId) {
      setMesas(mesas.map(mesa => (mesa.id === editarId ? novaMesa : mesa)));
      setEditarId(null);
    } else {
      if (mesas.some(mesa => mesa.id === numeroMesa)) {
        alert('Mesa com esse número já existe!');
        return;
      }
      setMesas([...mesas, novaMesa]);
    }

    limparFormulario();
  };


  const limparFormulario = () => {
    setNumeroMesa('');
    setCapacidade('');
    setStatus('disponível');
    setEditarId(null);
  };

  const editarMesa = (mesa) => {
    setNumeroMesa(mesa.numero);
    setCapacidade(mesa.capacidade.toString());
    setStatus(mesa.status);
    setEditarId(mesa.id);
  };

  const excluirMesa = (id) => {
    if (window.confirm('Tem certeza que deseja excluir essa mesa?')) {
      setMesas(mesas.filter(mesa => mesa.id !== id));
      if (editarId === id) limparFormulario();
    }
  };

  return (
    <div>
      <h2>Cadastrar Mesa</h2>

      <div>
        <label>Número da Mesa:</label>
        <input
          type="text"
          value={numeroMesa}
          onChange={(e) => setNumeroMesa(e.target.value)}
          disabled={editarId !== null} 
        />
      </div>

      <div>
        <label>Capacidade da Mesa:</label>
        <input
          type="number"
          min="1"
          value={capacidade}
          onChange={(e) => setCapacidade(e.target.value)}
        />
      </div>

      <div>
        <label>Status da Mesa:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="disponível">Disponível</option>
          <option value="ocupada">Ocupada</option>
        </select>
      </div>

      <button onClick={salvarMesa}>{editarId ? 'Atualizar' : 'Salvar'}</button>
      <button onClick={limparFormulario}>Limpar</button>

      <hr />

      <h3>Mesas Cadastradas</h3>
      <ul>
        {mesas.map((mesa) => (
          <li key={mesa.id}>
            Nº: {mesa.numero} | Capacidade: {mesa.capacidade} | Status: {mesa.status}
            <button onClick={() => editarMesa(mesa)}>Editar</button>
            <button onClick={() => excluirMesa(mesa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CadastrarMesas;