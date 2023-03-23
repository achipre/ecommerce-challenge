const redirection = () => {
  location.href = "../src/principal-admin.html";
};
let datosLogin = [];
const loginEmail = document.querySelector(".login__email");
const loginPass = document.querySelector(".login__pass");
const loginButton = document.querySelector(".login__button");
const loginErrorText = document.querySelector(".login__error");

// Quitar animacion al texto que alerta que son incorrctos los campos
const quitarAnimation = () => {
  loginErrorText.classList.remove("animation__shake");
};
// Hacer la logica de hacer click en el botton
loginButton.addEventListener("click", (evento) => {
  evento.preventDefault();

  datosLogin = [
    {
      email: loginEmail.value,
      pass: loginPass.value,
    },
  ];
  callAdmin();
});

async function callAdmin() {
  const adminFecth = await fetch("../src/database.json");
  const dataAdmin = await adminFecth.json();
  const showEmail = await dataAdmin.admin[0].email;
  const showPass = await dataAdmin.admin[0].pass;
  if (showEmail == datosLogin[0].email && showPass == datosLogin[0].pass) {
    redirection();
  } else {
    loginErrorText.classList.remove("text__transparent");
    loginErrorText.classList.add("animation__shake");
    setTimeout(() => {
      quitarAnimation();
    }, 800);
  }
}
