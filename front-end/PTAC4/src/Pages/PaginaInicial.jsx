import React from 'react';
import styles from './PaginaInicial.module.css';

const PaginaInicial = () => {
  return (
    <>
      {}
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1>
              Bem-vindo ao <span>Restaurante Bololo</span> 🍽️
            </h1>
            <p>
              Experimente nossos pratos e
              reserve sua mesa com facilidade!
            </p>
            <div className={styles.buttons}>
              <a href="/cardapio" className={styles.secondaryBtn}>
                Cardapio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginaInicial;