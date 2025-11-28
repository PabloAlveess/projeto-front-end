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
              Onde o sabor encontra a tradição. Experimente nossos pratos e
              reserve sua mesa com facilidade!
            </p>
            <div className={styles.buttons}>
              <a href="/cadastrarmesa" className={styles.primaryBtn}>
                Cadastrar Mesa
              </a>
              <a href="/reservarmesa" className={styles.secondaryBtn}>
                Reservar Mesa
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginaInicial;