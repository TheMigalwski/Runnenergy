import Cards from "../components/Cards";
import style from "./page.module.css";

export default function Profissionais() {
  return (
    <>
      <div className={style.list}>
        <Cards>
          <h2>Profissionais</h2>
          <div>
            <img
              src="/images/prof.jpg"
              alt="foto profissional"
              className={style.image}
            />

            <h3>Leonardo C. Magalhães</h3>
            <h4>Professor de Corrida</h4>
            <p>
              Telefone: (12) 93456-7891 <br />
              Email: professor@teste.com.br
            </p>
          </div>
        </Cards>
        <Cards>
          <h2>Profissionais</h2>
          <div>
            <img
              src="/images/prof.jpg"
              alt="foto profissional"
              className={style.image}
            />

            <h3>Leonardo C. Magalhães</h3>
            <h4>Professor de Corrida</h4>
            <p>
              Telefone: (12) 93456-7891 <br />
              Email: professor@teste.com.br
            </p>
          </div>
        </Cards>
        <Cards>
          <h2>Profissionais</h2>
          <div>
            <img
              src="/images/prof.jpg"
              alt="foto profissional"
              className={style.image}
            />

            <h3>Leonardo C. Magalhães</h3>
            <h4>Professor de Corrida</h4>
            <p>
              Telefone: (12) 93456-7891 <br />
              Email: professor@teste.com.br
            </p>
          </div>
        </Cards>
      </div>
    </>
  );
}
