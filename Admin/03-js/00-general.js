// =================================
// CAMBIO DE MÓDULOS
// =================================

const navButtons = document.querySelectorAll(".nav-btn");

const modules = document.querySelectorAll(".module");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // botones
    navButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // módulos
    modules.forEach((module) => {
      module.classList.remove("active-module");
    });

    // mostrar módulo
    const moduleId = button.dataset.module;

    document.getElementById(moduleId).classList.add("active-module");
  });
});

// =================================
// MODAL
// =================================

const modal = document.querySelector(".modal");

const openModal = document.getElementById("open-modal");

const closeModal = document.querySelector(".close-modal");

// abrir modal
openModal.addEventListener("click", () => {
  modal.classList.add("active");
});

// cerrar modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// cerrar clic afuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
