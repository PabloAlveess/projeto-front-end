import React, { useState } from 'react';

const CadastrarMesas = () => {
  const [mesas, setMesas] = useState([]);
  const [numero, setNumero] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [status, setStatus] = useState('Disponível');

  const salvarMesa = () => {
    const novaMesa = { id: Date.now(), numero, capacidade, status };
    setMesas([...mesas, novaMesa]);
    setNumero('');
    setCapacidade('');
  };

  const excluirMesa = (id) => {
    setMesas(mesas.filter(mesa => mesa.id !== id));
  };

  return (
    <div>
      <h1>Cadastrar Mesas</h1>
      <input
        placeholder="Número da mesa"
        value={numero}
        onChange={e => setNumero(e.target.value)}
      />
      <input
        placeholder="Capacidade"
        value={capacidade}
        onChange={e => setCapacidade(e.target.value)}
      />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option>Disponível</option>
        <option>Ocupada</option>
      </select>
      <button onClick={salvarMesa}>Salvar</button>

      <ul>
        {mesas.map(mesa => (
          <li key={mesa.id}>
            Mesa {mesa.numero} - Capacidade: {mesa.capacidade} - Status: {mesa.status}
            <button onClick={() => excluirMesa(mesa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CadastrarMesas;