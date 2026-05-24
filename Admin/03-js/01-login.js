//email admin@mail.com y la contraseña 123456

const boton = document.querySelector("#btnIngresar");

boton.addEventListener("click", accesoAdmin);

function accesoAdmin() {
  const email = document.querySelector('input[type="email"]');

  const password = document.querySelector('input[type="password"]');

  if (email.value === "admin@mail.com" && password.value === "123456") {
     window.location.pathname = "/Admin/01-html/02-dashboard.html";
    alert("Bienvenido, admin!");
  } else {
    alert("Email o contraseña incorrectos");
  }
}
