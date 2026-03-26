"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Elementos
  const btnLogin = document.querySelector(".login-link");
  const btnStores = document.querySelectorAll(".store-badge");

  // Função botão de login
  if (btnLogin) {
    btnLogin.addEventListener("click", function () {
      window.location.href = "./pages/login.html";
    });
  }

  // Função Store Badge
  for (let i = 0; i < btnStores.length; i++) {
    btnStores[i].style.transition =
      "transform 0.3s ease, background-color 0.3s ease";

    btnStores[i].addEventListener("mouseenter", function () {
      btnStores[i].style.backgroundColor = "green";
      btnStores[i].style.transform = "scale(1.05)";
    });

    btnStores[i].addEventListener("mouseleave", function () {
      btnStores[i].style.backgroundColor = "";
      btnStores[i].style.transform = "scale(1)";
    });
  }
});
