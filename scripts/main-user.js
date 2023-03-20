// BANNER
const banners = document.querySelector(".carousel__container");
const punto = document.querySelectorAll(".carousel__punto");

punto.forEach((cadaPunto, indice) => {
  cadaPunto.addEventListener("click", () => {
    // let posicion = indice;
    // let operation = posicion * -33.33;
    banners.style.transform = `translateX(${indice * -33.33}%)`;
    punto.forEach((cadaPunto) => cadaPunto.classList.remove("activo"));
    cadaPunto.classList.add("activo");
  });
});
