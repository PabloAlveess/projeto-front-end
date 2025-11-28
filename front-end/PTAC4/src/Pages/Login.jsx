import { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Login realizado (simulação)");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.group}>
            <label>Email</label>
            <input 
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.group}>
            <label>Senha</label>
            <input 
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button className={styles.btnLogin} type="submit">
            Entrar
          </button>

          <p className={styles.text}>
            Não possui conta?  
            <Link to="/cadastro" className={styles.link}> Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
