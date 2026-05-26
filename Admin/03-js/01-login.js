//email admin@mail.com y la contraseña 123456

const boton = document.querySelector("#btnIngresar");
const txtEmail = document.getElementById("email");
const txtPass = document.getElementById("pass");

boton.addEventListener("click", accesoAdmin);
txtEmail.addEventListener("keydown", e => 
  {
    if (e.key === "Enter") 
      accesoAdmin();
  });
txtPass.addEventListener("keydown", e => 
  {
    if (e.key === "Enter") 
      accesoAdmin();
  });


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
