import React, { useState } from 'react';
import styles from "./Cardapio.module.css";

export default function Cardapio() {
  const pratos = [
    {
      id: 1,
      nome: "Lasanha Bolonhesa",
      descricao: "Massa fresca, molho artesanal e queijo gratinado.",
      preco: "R$ 32,90",
      imagem: "/pratos/lasanha.jpg",
    },
    {
      id: 2,
      nome: "Pizza Margherita",
      descricao: "Molho de tomate, mussarela fresca e manjericão.",
      preco: "R$ 27,50",
      imagem: "/pratos/margerita.jpg",
    },
    {
      id: 3,
      nome: "Macarrão Carbonara",
      descricao: "Massa al dente, ovos, queijo parmesão, bacon crocante e pimenta-do-reino.",
      preco: "R$ 24,90",
      imagem: "/pratos/carbonara.jpg",
    },
    {
      id: 4,
      nome: "Tábua de Frios",
      descricao: "Queijos variados, salames selecionados, presunto cru, azeitonas, castanhas e geleia artesanal.",
      preco: "R$ 21,00",
      imagem: "/pratos/Tabua-de-frios.jpg",
    },
  ];

  return (
    <div className={styles.cardapioContainer}>
      <h1>Cardápio</h1>

      <div className={styles.grid}>
        {pratos.map((prato) => (
          <div className={styles.card} key={prato.id}>
            <img src={prato.imagem} alt={prato.nome} />
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <span className={styles.preco}>{prato.preco}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
