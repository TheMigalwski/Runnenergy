import Link from "next/link";

export default function Menu() {
  return (
    <header className="topbar">
      <img
        src="/images/logoRunnenergy.png"
        alt="Logo Runnenergy"
        className="logo"
      />

      <input
        className="pesquisa"
        placeholder="🔎 Pesquise a Prova ou Profissional"
      />

      <nav className="menu">
        <Link href="/">Início</Link>
        <Link href="/mapas">Mapa</Link>
        <Link href="/provas">Provas</Link>
        <Link href="/profissionais">Profissionais</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
