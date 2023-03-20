// Haz tú validación en javascript
// Constantes de los inputs involucradas
const inputs = document.querySelectorAll(".form_name, .contacto__textarea");
// Errores al tratar de validar Validaciones
const tipoError = ["valueMissing", "patternMismatch", "tooShort"];
// Inputs con los mensajes dependiendoo de los Errores en cada Input
const msjErrores = {
  nombre: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "Ingresa mínimo 3 carácteres, solo letras",
  },
  textarea: {
    valueMissing: "Este campo no puede estar vacio",
    tooShort: "El mensaje debe tener minimo 6 carácteres",
  },
};
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    console.log("hola");
    validar(input.target);
  });
});

function validar(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.querySelector(".alert-messages").innerHTML = "";
  } else {
    input.parentElement.querySelector(".alert-messages").innerHTML =
      mostrarMsjError(tipoDeInput, input);
  }
}
//
function mostrarMsjError(tipoDeInput, input) {
  let msj = "";
  tipoError.forEach((e) => {
    if (input.validity[e]) {
      msj = msjErrores[tipoDeInput][e];
    }
  });
  return msj;
}

// Enviar mensaje mediante servicio Emailjs

const form = document.getElementById("form");
const nombre = document.getElementById("form_name");
const mensaje = document.getElementById("message");
const btn = document.getElementById("button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_hnb477t";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar mensaje";
      window.document.location.reload();
    },
    (err) => {
      btn.value = "Intentar de nuevo";
    }
  );
});
