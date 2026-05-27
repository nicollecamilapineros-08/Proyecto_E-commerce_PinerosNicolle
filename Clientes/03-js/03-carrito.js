class ModalCarrito extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = carrito.reduce(
      (acumulado, producto) => acumulado + Number(producto.precio),
      0,
    );

    this.innerHTML = `
      <div class="fondo-carrito" id="fondoCarrito">

        <div class="modal-carrito">

          <div class="carrito-header">
            <h2>Tu carrito</h2>
            <button id="btnCerrarCarrito">X</button>
          </div>

          <div class="carrito-lista">
            ${
              carrito.length === 0
                ? `<p class="carrito-vacio">Tu carrito está vacío.</p>`
                : carrito
                    .map(
                      (producto, indice) => `
                  <div class="carrito-item">
                    <img src="${producto.imagen}" alt="${producto.nombre}" />
                    <div class="carrito-info">
                      <h3>${producto.nombre}</h3>
                      <p>$${producto.precio}</p>
                    </div>
                    <button class="delete" onclick="eliminarProducto(${indice})">
                      Eliminar
                    </button>
                  </div>
                `,
                    )
                    .join("")
            }
          </div>

          ${
            carrito.length > 0
              ? `
            <div class="carrito-total">
              <h3>Total: $${total.toLocaleString()}</h3>
            </div>
            <button class="btnComprar" id="btnComprar">
              Comprar
            </button>
          `
              : ""
          }

        </div>

      </div>

      <!-- FORMULARIO DATOS CLIENTE -->
      <div class="fondo-formulario" id="fondoFormulario">

        <div class="modal-formulario">

          <div class="formulario-header">
            <h2>Datos de envío</h2>
            <button id="btnCerrarFormulario">X</button>
          </div>

          <form class="formulario-cliente">

            <input 
              type="text" 
              id="identificacion" 
              placeholder="Número de identificación" 
            />
            <input 
              type="text" 
              id="nombreCliente" 
              placeholder="Nombre completo" 
            />
            <input 
              type="text" 
              id="direccion" 
              placeholder="Dirección de envío" 
            />
            <input 
              type="tel" 
              id="telefono" 
              placeholder="Teléfono" 
            />
            <input 
              type="email" 
              id="correo" 
              placeholder="Correo electrónico" 
            />

            <button type="button" id="btnConfirmarCompra">
              Confirmar compra
            </button>

          </form>

        </div>

      </div>
    `;

    // eventos
    document
      .getElementById("btnCerrarCarrito")
      .addEventListener("click", cerrarCarrito);
    document.getElementById("fondoCarrito").addEventListener("click", (e) => {
      if (e.target.id === "fondoCarrito") cerrarCarrito();
    });

    document
      .getElementById("btnCerrarFormulario")
      .addEventListener("click", cerrarFormulario);
    document
      .getElementById("fondoFormulario")
      .addEventListener("click", (e) => {
        if (e.target.id === "fondoFormulario") cerrarFormulario();
      });

    if (carrito.length > 0) {
      document
        .getElementById("btnComprar")
        .addEventListener("click", abrirFormulario);
      document
        .getElementById("btnConfirmarCompra")
        .addEventListener("click", confirmarCompra);
    }
  }
}

customElements.define("modal-carrito", ModalCarrito);

// funciones

function abrirCarrito() {
  document.querySelector("modal-carrito").render();
  setTimeout(() => {
    document.getElementById("fondoCarrito").classList.add("active");
  }, 50);
}

function cerrarCarrito() {
  document.getElementById("fondoCarrito").classList.remove("active");
}

function abrirFormulario() {
  cerrarCarrito();
  document.getElementById("fondoFormulario").classList.add("active");
}

function cerrarFormulario() {
  document.getElementById("fondoFormulario").classList.remove("active");
}

function eliminarProducto(indice) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.querySelector("modal-carrito").render();
}

function agregarAlCarrito(indice) {
  let productos = JSON.parse(localStorage.getItem("productos")) || [];
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let producto = productos[indice];

  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(`"${producto.nombre}" agregado al carrito ✓`);
}

function confirmarCompra() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let datosCliente = {
    identificacion: document.getElementById("identificacion").value,
    nombre: document.getElementById("nombreCliente").value,
    direccion: document.getElementById("direccion").value,
    telefono: document.getElementById("telefono").value,
    correo: document.getElementById("correo").value,
  };

  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  let nuevoPedido = {
    id: Date.now(),
    fecha: new Date().toLocaleDateString(),
    cliente: datosCliente,
    productos: carrito,
    total: carrito.reduce((acumulado, p) => acumulado + Number(p.precio), 0),
    estado: "Pendiente",
  };

  pedidos.push(nuevoPedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
  localStorage.removeItem("carrito");

  cerrarFormulario();
  alert("¡Compra realizada con éxito!");
}
