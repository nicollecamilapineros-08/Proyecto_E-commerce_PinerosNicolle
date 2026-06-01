//buscador

class BuscadorProductos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="buscador">
        <input 
          type="text" 
          id="inputBuscar" 
          placeholder="Buscar productos..."
        />
        <select id="filtroCategorias">
          <option value="">CATEGORÍAS</option>
        </select>
      </div>
    `;

    const categorias = JSON.parse(localStorage.getItem("categorias")) || [];
    const select = document.querySelector("#filtroCategorias");

    categorias.forEach((cat) => {
      select.innerHTML += `<option value="${cat.nombre}">${cat.nombre}</option>`;
    });

    document.querySelector("#inputBuscar").addEventListener("input", filtrar);
    select.addEventListener("change", filtrar);
  }
}

customElements.define("buscador-productos", BuscadorProductos);

const productos = JSON.parse(localStorage.getItem("productos")) || [];

function pintarProductos(lista) {
  const contenedor = document.querySelector("#lista-productos");
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = `<p class="sin-resultados">No se encontraron productos.</p>`;
    return;
  }

  lista.forEach((producto, index) => {
    const indiceReal = productos.indexOf(producto);

    contenedor.innerHTML += `
      <div class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h2>${producto.nombre}</h2>
        <p class="categoria">${producto.categoria}</p>
        <p class="precio">$${producto.precio}</p>
        <a href="../01-html/02-detalles.html" onclick="verDetalles(${indiceReal})">
          Ver detalles
        </a>
        <button onclick="agregarAlCarrito(${indiceReal})">
          Agregar al carrito
        </button>
      </div>
    `;
  });
}

function filtrar() {
  const texto = document.querySelector("#inputBuscar").value.toLowerCase();
  const categoria = document.querySelector("#filtroCategorias").value;

  const resultado = productos.filter((p) => {
    const coincideNombre = p.nombre.toLowerCase().includes(texto);
    const coincideCategoria = categoria === "" || p.categoria === categoria;
    return coincideNombre && coincideCategoria;
  });

  pintarProductos(resultado);
}

// CARRITO

function agregarAlCarrito(indice) {
  const producto = productos[indice];
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(`"${producto.nombre}" agregado al carrito ✓`);
}

// INICIAR

document.addEventListener("DOMContentLoaded", () => {
  customElements.whenDefined("buscador-productos").then(() => {
    pintarProductos(productos);
  });

  customElements.whenDefined("modal-carrito").then(() => {
    setTimeout(() => {
      document
        .getElementById("btnCarrito")
        .addEventListener("click", abrirCarrito);
    }, 200);
  });
});


function verDetalles(indice) {
  localStorage.setItem("productoSeleccionado", indice);

  window.location.href = "../01-html/02-detalles.html";
}
