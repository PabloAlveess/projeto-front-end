import React from 'react';
import styles from './PaginaInicial.module.css';

const PaginaInicial = () => {
  return (
    <>
      {/* O container agora ocupa 100vw e 100vh (controlado pelo CSS) */}
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
              <a href="/cadastrar-mesa" className={styles.primaryBtn}>
                Cadastrar Mesa
              </a>
              <a href="/reservar-mesa" className={styles.secondaryBtn}>
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