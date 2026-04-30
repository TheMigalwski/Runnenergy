import style from "./style.module.css";

export default function Card({ nome, profissao, phone, email }) {
  return (
    <div className={style.card}>
      <h2>{profissao}</h2>
      <div>
        <img
          src="/images/prof.jpg"
          alt="foto profissional"
          className={style.image}
        />

        <h3>{nome}</h3>
        <p>
          Telefone: {phone} <br />
          Email: {email}
        </p>
      </div>
    </div>
  );
}
