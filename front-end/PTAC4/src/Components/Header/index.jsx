import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <span> Restaurante Bololo</span>

      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
          Início
        </NavLink>

        <NavLink to="/cardapio" className={({ isActive }) => isActive ? styles.active : ""}>
          Cardapio
        </NavLink>
         
        <NavLink to="/cadastro" className={({ isActive }) => isActive ? styles.active : ""}>
          Criar Conta
        </NavLink>

        <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ""}>
          Fazer Login
        </NavLink>

        <NavLink to="/cadastrarmesa" className={({ isActive }) => isActive ? styles.active : ""}>
          Cadastrar Mesa
        </NavLink>

        <NavLink to="/reservarmesa" className={({ isActive }) => isActive ? styles.active : ""}>
          Reservar Mesa
        </NavLink>

        <NavLink to="/consultarmesa" className={({ isActive }) => isActive ? styles.active : ""}>
          Consultar Mesa
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;