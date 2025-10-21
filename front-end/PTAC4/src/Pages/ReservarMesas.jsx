import React, { useState } from 'react';

const ReservarMesas = () => {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [mesa, setMesa] = useState('');
  const [reservas, setReservas] = useState([]);

  const confirmarReserva = () => {
    const novaReserva = { id: Date.now(), data, horario, nome, contato, mesa };
    setReservas([...reservas, novaReserva]);
    setData('');
    setHorario('');
    setNome('');
    setContato('');
    setMesa('');
  };

  return (
    <div>
      <h1>Reservar Mesas</h1>
      <input type="date" value={data} onChange={e => setData(e.target.value)} />
      <input type="time" value={horario} onChange={e => setHorario(e.target.value)} />
      <input placeholder="Nome do cliente" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Contato" value={contato} onChange={e => setContato(e.target.value)} />
      <input placeholder="Mesa" value={mesa} onChange={e => setMesa(e.target.value)} />
      <button onClick={confirmarReserva}>Confirmar Reserva</button>

      <ul>
        {reservas.map(reserva => (
          <li key={reserva.id}>
            {reserva.nome} reservou mesa {reserva.mesa} em {reserva.data} às {reserva.horario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservarMesas;