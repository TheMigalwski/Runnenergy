"use client";

import { useEffect, useState } from "react";
import style from "@/app/page.module.css";
import Link from "next/link";
import Profissionais from "./profissionais/page";

export default function Home() {
  const images = [
    "/images/cards/card1.png",
    "/images/cards/card2.png",
    "/images/cards/card3.png",
    "/images/cards/card4.png",
    "/images/cards/card5.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={style.card}>
        <div
          className={style.slider}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Card ${i + 1}`}
              className={style.cardImage}
            />
          ))}
        </div>
      </div>

      <nav className={style.professionals}>
        <Link href="/profissionais">Profissionais</Link>
        <Profissionais />
      </nav>
    </>
  );
}
