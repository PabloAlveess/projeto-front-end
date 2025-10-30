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
      alert('Preencha todos os campos!');
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
    <div className={styles.container}>
      <h2>Cadastrar Mesa</h2>

      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label>Número da Mesa:</label>
          <input
            type="text"
            placeholder="Ex: 01"
            value={numeroMesa}
            onChange={(e) => setNumeroMesa(e.target.value)}
            disabled={editarId !== null}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Capacidade:</label>
          <input
            type="number"
            min="1"
            placeholder="Ex: 4"
            value={capacidade}
            onChange={(e) => setCapacidade(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="disponível">Disponível</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </div>

        <div className={styles.buttons}>
          <button className={styles.saveBtn} onClick={salvarMesa}>
            {editarId ? 'Atualizar' : 'Salvar'}
          </button>
          <button className={styles.clearBtn} onClick={limparFormulario}>
            Limpar
          </button>
        </div>
      </div>

      <div className={styles.listSection}>
        <h3>Mesas Cadastradas</h3>
        {mesas.length === 0 ? (
          <p className={styles.emptyList}>Nenhuma mesa cadastrada ainda.</p>
        ) : (
          <ul>
            {mesas.map((mesa) => (
              <li key={mesa.id} className={styles.listItem}>
                <div className={styles.info}>
                  <strong>Mesa {mesa.numero}</strong>
                  <span>Capacidade: {mesa.capacidade}</span>
                  <span
                    className={`${styles.status} ${
                      mesa.status === 'ocupada' ? styles.ocupada : styles.disponivel
                    }`}
                  >
                    {mesa.status}
                  </span>
                </div>
                <div className={styles.actions}>
                  <button className={styles.editBtn} onClick={() => editarMesa(mesa)}>
                    Editar
                  </button>
                  <button className={styles.deleteBtn} onClick={() => excluirMesa(mesa.id)}>
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CadastrarMesas;