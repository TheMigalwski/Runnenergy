"use client";

import { useState } from "react";
import style from "@/app/components/Login/style.module.css";

export default function Login({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const closeLogin = () => {
    if (onClose) {
      onClose();
      return;
    }

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={style.overlay} onClick={closeLogin}>
      <div className={style.card} onClick={(event) => event.stopPropagation()}>
        <button
          className={style.closeButton}
          type="button"
          aria-label="Fechar login"
          onClick={closeLogin}
        >
          x
        </button>

        <img
          src="/images/logoRunnenergy.png"
          alt="Runnenergy"
          className={style.logo}
        />

        <h1>Entrar</h1>

        <form className={style.form}>
          <input type="email" placeholder="E-mail/Username" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Acessar</button>
        </form>
      </div>
    </div>
  );
}
