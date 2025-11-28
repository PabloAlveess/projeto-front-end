import { useState } from "react";
import styles from "./ReservarMesas.module.css";

export default function ReservarMesas() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Mesa reservada com sucesso!");
    console.log({
      nome,
      quantidade,
      data,
      hora
    });

    setNome("");
    setQuantidade(1);
    setData("");
    setHora("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Reservar Mesa</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        
        <div className={styles.formGroup}>
          <label>Nome completo:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Quantidade de pessoas:</label>
          <input
            type="number"
            min="1"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Data:</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Horário:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.botao}>
          Reservar
        </button>

      </form>
    </div>
  );
}