"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.css";
import Login from "../Login";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const openLogin = () => {
    setShowLogin(true);
    closeMenu();
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header className={styles.topbar}>
        <div className={styles.headerLine}>
          <div className={styles.brand}>
            <img
              src="/images/logoRunnenergy.png"
              alt="Logo Runnenergy"
              className={styles.logo}
            />

            <section className={styles.login}>
              <button type="button" onClick={openLogin}>
                Login
              </button>
            </section>
          </div>

          <button
            className={styles.menuButton}
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="menu-principal"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          id="menu-principal"
          className={`${styles.menuContent} ${isOpen ? styles.open : ""}`}
        >
          <form className={styles.pesquisa} onSubmit={handleSearch}>
            <input
              placeholder="Pesquise a Prova ou Profissional"
              aria-label="Pesquise a Prova ou Profissional"
            />

            <button type="submit" aria-label="Pesquisar">
              <img src="/images/search.svg" alt="" />
            </button>
          </form>

          <nav className={styles.menu}>
            <Link href="/" onClick={closeMenu}>
              Início
            </Link>
            <Link href="/mapas" onClick={closeMenu}>
              Mapa
            </Link>
            <Link href="/provas" onClick={closeMenu}>
              Provas
            </Link>
            <Link href="/profissionais" onClick={closeMenu}>
              Profissionais
            </Link>
            <Link href="/contato" onClick={closeMenu}>
              Contato
            </Link>
          </nav>
        </div>
      </header>
      {showLogin && <Login onClose={closeLogin} />}
    </>
  );
}
