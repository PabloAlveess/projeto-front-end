import { useState } from "react";
import styles from "./ConsultarMesas.module.css";

function ConsultarMesa() {
  const [numeroMesa, setNumeroMesa] = useState("");
  const [result, setResult] = useState(null);

  const mesasCadastradas = [
    { numero: 1, status: "Disponível", capacidade: 4 },
    { numero: 2, status: "Ocupada", capacidade: 6 },
    { numero: 3, status: "Reservada", capacidade: 2 },
  ];

  function consultarMesa() {
    const mesa = mesasCadastradas.find(m => m.numero == numeroMesa);
    setResult(mesa || "erro");
  }

  function limpar() {
    setNumeroMesa("");
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.titulo}>Consultar Mesa</h2>

        <div className={styles.formGroup}>
          <label>Nº da Mesa</label>
          <input
            type="number"
            value={numeroMesa}
            onChange={(e) => setNumeroMesa(e.target.value)}
            placeholder="Digite o número (1 ao 3)"
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.btnConsultar} onClick={consultarMesa}>
            Consultar
          </button>
          <button className={styles.btnLimpar} onClick={limpar}>
            Limpar
          </button>
        </div>

        {result && (
          <div className={styles.result}>
            {result === "erro" ? (
              <p className={styles.notfound}>❌ Mesa não encontrada.</p>
            ) : (
              <>
                <h3>Mesa {result.numero}</h3>
                <p><strong>Status:</strong> <span className={styles.status}>{result.status}</span></p>
                <p><strong>Capacidade:</strong> {result.capacidade} pessoas</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ConsultarMesa;