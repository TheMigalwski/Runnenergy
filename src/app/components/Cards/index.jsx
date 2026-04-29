import style from "./style.module.css";

export default function Cards({ children }) {
  return (
    <>
      <div className={style.card}>{children}</div>
    </>
  );
}
