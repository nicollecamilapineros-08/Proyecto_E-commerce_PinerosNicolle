class DetalleProducto extends HTMLElement {
  connectedCallback() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const indice = Number(localStorage.getItem("productoSeleccionado"));
    const producto = productos[indice];

    if (!producto) {
      this.innerHTML = `
        <div class="detalle">
          <p>Producto no encontrado.</p>
          <a href="01-principal.html">← Volver</a>
        </div>
      `;
      return;
    }

    this.innerHTML = `
      <section class="detalle">

        <div class="imagen">
          <img src="${producto.imagen}" alt="${producto.nombre}" />
        </div>

        <div class="info">
          <a href="01-principal.html" class="volver">
            ← Volver
          </a>
          <h1>${producto.nombre}</h1>
          <p class="categoria">${producto.categoria}</p>
          <p class="descripcion">${producto.descripcion}</p>
          <p class="precio">$${producto.precio}</p>
          <button onclick="agregarAlCarrito(${indice})">
            Agregar al carrito
          </button>
        </div>

      </section>
    `;
  }
}

customElements.define("detalle-producto", DetalleProducto);

function agregarAlCarrito(indice) {
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = productos[indice];

  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(`"${producto.nombre}" agregado al carrito ✓`);
}
