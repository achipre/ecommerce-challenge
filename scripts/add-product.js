// import { libraryAll } from "./allproduct";
// Haz tú validación en javascript
// Constantes de los inputs involucradas
const inputsAdd = document.querySelectorAll(".product__add");
// Errores al tratar de validar Validaciones
const errorInput = [
  "valueMissing",
  "patternMismatch",
  "typeMismatch",
  "rangeUnderflow",
  "rangeOverflow",
  "tooShort",
];
// Inputs con los mensajes dependiendoo de los Errores en cada Input
const msjError = {
  url: {
    valueMissing: "Este campo no puede estar vacio",
    typeMismatch: "Ingresa un URL válido",
  },
  genre: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "Ingresa mínimo 3 carácteres, solo letras",
  },
  title: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "Ingresa mínimo 2 carácteres",
  },
  price: {
    valueMissing: "Este campo no puede estar vacio",
    rangeUnderflow: "El precio no puede ser $0",
    rangeOverflow: "El precio maximo es de $10.000",
  },
  description: {
    valueMissing: "Este campo no puede estar vacio",
    tooShort: "Ingresa mínimo 15 cáracteres",
  },
};
inputsAdd.forEach((inpAdd) => {
  inpAdd.addEventListener("blur", (inpAdd) => {
    validando(inpAdd.target);
  });
});

function validando(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.querySelector(".alert-CRUD").innerHTML = "";
  } else {
    input.parentElement.querySelector(".alert-CRUD").innerHTML =
      mostrarTipoError(tipoDeInput, input);
  }
}
//
function mostrarTipoError(tipoDeInput, input) {
  let msj = "";
  errorInput.forEach((e) => {
    if (input.validity[e]) {
      msj = msjError[tipoDeInput][e];
    }
  });
  return msj;
}

// Obtener datos del Formulario
// Boton del Formulario que agrega Libros
const btnAddBook = document.querySelector(".principal__button");
const formAddBook = document.querySelector(".form__add");

const getInfoNewBook = () => {
  const inputURL = document.querySelector(".product__add__url");
  const url_img = inputURL.value;
  const inputGenre = document.querySelector(".product__add__genre");
  const genre = inputGenre.value;
  const inputNameBook = document.querySelector(".product__add__title");
  const nombre = inputNameBook.value;
  const inputPrice = document.querySelector(".product__add__price");
  const price = inputPrice.value;
  const inputMessage = document.querySelector(".product__add__description");
  const description = inputMessage.value;
  let infoBook = {
    url_img,
    genre,
    nombre,
    price,
    description,
  };
  return infoBook;
};

// Agregar Libro
const addBook = async () => {
  const fectLibrary = await fetch("http://localhost:3000/libros", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getInfoNewBook()),
  });
};

btnAddBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBook();
});
