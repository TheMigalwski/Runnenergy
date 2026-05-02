import Card from "../Card";

export default function CardList() {
  return (
    <>
      <Card
        nome="Leonardo C. Magalhães"
        profissao="Professor de Corrida"
        phone="(12) 93456-7891"
        email="professor@teste.com.br"
      />
      <Card
        nome="Camila Faleiros A. Pereira"
        profissao="Nutricionista"
        phone="(12) 93456-7892"
        email="nutri@teste.com.br"
      />
    </>
  );
}
