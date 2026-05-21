/* ── Páginas ── */

export function basico() {
  const showPage = (id) => {
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  };

  /* ── Screens del dashboard ── */
  const titles = {
    categorias: "Categorías",
    productos: "Productos",
    pedidos: "Pedidos",
  };
  const showScreen = (key) => {
    document
      .querySelectorAll(".screen")
      .forEach((s) => s.classList.remove("active"));
    document.getElementById("screen-" + key).classList.add("active");
    document
      .querySelectorAll(".nav-item")
      .forEach((n) => n.classList.remove("active"));
    document
      .querySelector(`.nav-item[data-screen="${key}"]`)
      .classList.add("active");
    document.getElementById("topbar-title").textContent = titles[key];
    // Ocultar detalle al cambiar de screen
    const det = document.getElementById("order-detail");
    if (det) det.classList.remove("active");
  };

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => showScreen(item.dataset.screen));
  });

  /* ── Login ── */
  document
    .getElementById("btn-login")
    .addEventListener("click", () => showPage("page-dashboard"));

  /* ── Logout ── */
  document
    .getElementById("btn-logout")
    .addEventListener("click", () => showPage("page-login"));

  /* ── Modales ── */
  const openModal = (id) => document.getElementById(id).classList.add("open");
  const closeModal = (id) =>
    document.getElementById(id).classList.remove("open");

  document
    .getElementById("btn-open-cat-modal")
    .addEventListener("click", () => {
      document.getElementById("modal-cat-title").textContent =
        "Nueva categoría";
      openModal("modal-categoria");
    });

  document
    .getElementById("btn-open-prod-modal")
    .addEventListener("click", () => {
      document.getElementById("modal-prod-title").textContent =
        "Nuevo producto";
      openModal("modal-producto");
    });

  document.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", () => closeModal(el.dataset.close));
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  /* ── Botones Editar categoría ── */
  document.querySelectorAll("#screen-categorias .btn-edit").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("modal-cat-title").textContent =
        "Editar categoría";
      openModal("modal-categoria");
    });
  });

  /* ── Botones Editar producto ── */
  document.querySelectorAll("#screen-productos .btn-edit").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("modal-prod-title").textContent =
        "Editar producto";
      openModal("modal-producto");
    });
  });

  /* ── Detalle de pedido ── */
  document.querySelectorAll(".btn-ver-detalle").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("detail-order-num").textContent =
        "#ORD-" + btn.dataset.order;
      document.getElementById("order-detail").classList.add("active");
      document
        .getElementById("order-detail")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.getElementById("btn-close-detail").addEventListener("click", () => {
    document.getElementById("order-detail").classList.remove("active");
  });
}