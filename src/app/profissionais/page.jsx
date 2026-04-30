import Cards from "../components/Card";
import style from "./page.module.css";

export default function Profissionais() {
  return (
    <>
      <div className={style.list}>
        <Cards
          nome="Leonardo C. Magalhães"
          profissao="Professor de Corrida"
          phone="(12) 93456-7891"
          email="professor@teste.com.br"
        />
        <Cards
          nome="Camila Faleiros A. Pereira"
          profissao="Nutricionista"
          phone="(12) 93456-7892"
          email="nutri@teste.com.br"
        />
      </div>
    </>
  );
}
