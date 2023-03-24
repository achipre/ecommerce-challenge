// BANNER
const banners = document.querySelector(".carousel__container");
const punto = document.querySelectorAll(".carousel__punto");

punto.forEach((cadaPunto, indice) => {
  cadaPunto.addEventListener("click", () => {
    banners.style.transform = `translateX(${indice * -33.33}%)`;
    punto.forEach((cadaPunto) => cadaPunto.classList.remove("activo"));
    cadaPunto.classList.add("activo");
  });
});

// API de Libros
async function obtenerLibros() {
  try {
    const books = await fetch("../src/database.json");
    const datos = await books.json();
    const cuerpo = document.querySelector(".catalog"); //HTML donde lo colocaremos

    // Array con los generos
    let generos = [];
    datos.libros.map((e) => {
      let genero = e.genre;
      if (generos.includes(genero)) {
      } else {
        generos.push(genero);
      }
    });
    // Funcion para imprimir librero por genero
    let htmlToPrint = "";
    const LibrosXGenero = generos.forEach((genero) => {
      htmlToPrint += `
      <section class="genero">
        <div class="genero__head">
          <h2 id="${genero}" class="genero__head-title">${genero}</h2>
          <a href="#" class="vermas">
            <p>Ver mas</p>
            <svg
              class="back__search"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.05293 20.2223L0.362117 11.5315C0.230438 11.3998 0.136946 11.2571 0.0816407 11.1035C0.0272134 10.9499 0 10.7853 0 10.6097C0 10.4341 0.0272134 10.2695 0.0816407 10.1159C0.136946 9.96229 0.230438 9.81964 0.362117 9.68796L9.05293 0.997152C9.29434 0.755741 9.59588 0.629329 9.95756 0.617917C10.3201 0.607383 10.6331 0.733794 10.8964 0.997152C11.1598 1.23856 11.2972 1.54011 11.3086 1.90179C11.3191 2.26434 11.1927 2.5773 10.9294 2.84066L4.47708 9.29292H19.1922C19.5653 9.29292 19.8782 9.4189 20.1311 9.67084C20.383 9.92366 20.509 10.2366 20.509 10.6097C20.509 10.9828 20.383 11.2953 20.1311 11.5473C19.8782 11.8001 19.5653 11.9265 19.1922 11.9265H4.47708L10.9294 18.3788C11.1708 18.6202 11.2972 18.9274 11.3086 19.3005C11.3191 19.6736 11.1927 19.9809 10.9294 20.2223C10.6879 20.4856 10.3807 20.6173 10.0076 20.6173C9.63451 20.6173 9.31628 20.4856 9.05293 20.2223Z"
                fill="#121212"
              />
            </svg>
          </a>
        </div>
        <div class="books">
          ${datos.libros
            .map((e) => {
              if (e.genre == genero) {
                return `
              <picture>
                <img src="${e.url_img}" alt="${e.nombre}" srcset="" />
                <section class="detail">
                  <p class="title__book">${e.nombre}</p>
                  <p class="price__book">$ ${e.price}</p>
                  <a id="${e.id}" href="./product-card.html" class="ver__book">Ver Producto</a>
                </section>
              </picture>
            `;
              }
            })
            .join("")}
        </div>
      </section>`;
    });

    cuerpo.innerHTML = htmlToPrint;
  } catch (err) {
    console.log(err);
  }
}
obtenerLibros();
