import { useState } from "react";
import styles from "./Cadastro.module.css";

export default function Register() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastrando usuário:", form);
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Criar Conta</h2>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Nome</label>
            <input name="nome" onChange={handleChange} required />
          </div>

          <div className={styles.field}>
            <label>Sobrenome</label>
            <input name="sobrenome" onChange={handleChange} required />
          </div>
        </div>

        <div className={styles.field}>
          <label>E-mail</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className={styles.field}>
          <label>Rua</label>
          <input name="rua" onChange={handleChange} required />
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Número</label>
            <input name="numero" onChange={handleChange} required />
          </div>

          <div className={styles.field}>
            <label>Bairro</label>
            <input name="bairro" onChange={handleChange} required />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Cidade</label>
            <input name="cidade" onChange={handleChange} required />
          </div>

          <div className={styles.field}>
            <label>UF</label>
            <input name="uf" maxLength={2} onChange={handleChange} required />
          </div>
        </div>

        <button className={styles.btn} type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
