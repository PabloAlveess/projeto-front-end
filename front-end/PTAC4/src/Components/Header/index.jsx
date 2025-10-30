import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <span>Restaurante Bololo</span>
      <nav>
        <Link to="/"> Início </Link>
        <Link to="/cadastrarmesa"> Cadastrar Mesa</Link>
        <Link to="/reservarmesa"> Reservar Mesa</Link>
        <Link to="/"> Consultar Mesa</Link>
      </nav>
    </header>
  );
}

export default Header;