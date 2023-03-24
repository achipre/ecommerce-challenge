const contenidoLibrary = document.querySelector(".books");

// Function eliminar
const eliminarBook = (id) => {
  return fetch(`http://localhost:3000/libros/${id}`, {
    method: "DELETE",
  });
};
const viewCardProduct = (id) => {
  console.log(id);
  return fetch(`http://localhost:3000/libros/${id}`, {
    method: "GET",
  });
};

// funcion que obtine los libros
async function libraryAll() {
  const libraryFatch = await fetch("../src/database.json");
  const datosLibaryAll = await libraryFatch.json();
  const showLibraryAll = await datosLibaryAll.libros;
  let libraryList = "";
  showLibraryAll.forEach((e) => {
    libraryList += `
    <picture>
      <img src="${e.url_img}" alt="${e.nombre}" srcset="" />
      <a id="${e.id}" class="link__edit" href="./add-products.html">
        <img src="../assets/logo_edit.png" alt="logo editar" srcset="" />
      </a>
      <a id="${e.id}" class="link__delete" href="#">
        <img src="../assets/logo_delet.png" alt="logo borrar" srcset="" />
      </a>
      <section class="detail">
        <p class="title__book">${e.nombre}</p>
        <p class="price__book">${e.price}</p>
        <a id="${e.id}" href="#" class="ver__book">Ver Producto</a>
      </section>
    </picture>
    `;
    return libraryList;
  });
  contenidoLibrary.innerHTML = libraryList;

  const verProduct = contenidoLibrary.querySelectorAll(".link__delete");
  verProduct.forEach((e) =>
    e.addEventListener("click", () => {
      eliminarBook(e.id);
    })
  );
  const cardProduct = contenidoLibrary.querySelectorAll(".ver__book");
  cardProduct.forEach((e) =>
    e.addEventListener("click", () => {
      viewCardProduct(e.id);
    })
  );
}
libraryAll();
