import Link from "next/link";
import styles from "./style.module.css";

export default function Menu() {
  return (
    <header className={styles.topbar}>
      <div className={styles.brand}>
        <img
          src="/images/logoRunnenergy.png"
          alt="Logo Runnenergy"
          className={styles.logo}
        />

        <section className={styles.login}>
          <Link href="/">Login</Link>
        </section>
      </div>

      <input
        className={styles.pesquisa}
        placeholder="🔎 Pesquise a Prova ou Profissional"
      />

      <nav className={styles.menu}>
        <Link href="/">Início</Link>
        <Link href="/mapas">Mapa</Link>
        <Link href="/provas">Provas</Link>
        <Link href="/profissionais">Profissionais</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
