import style from "@/app/mapas/page.module.css";
import Profissionais from "@/app/profissionais/page";

export default function Mapas() {
  return (
    <section className={style.mapas}>
      <img src="/images/mapa.png" alt="Mapa" className={style.mapCard} />

      <div className={style.profissionais}>{/* <Profissionais /> */}</div>
    </section>
  );
}
