
document.addEventListener("DOMContentLoaded", () => {
  customElements.whenDefined("tabla-categorias").then(() => {
    setTimeout(() => {

      // cambiar de módulos
      const navButtons = document.querySelectorAll(".nav-btn");
      const modules = document.querySelectorAll(".module");

      navButtons.forEach((button) => {
        button.addEventListener("click", () => {
          navButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");
          modules.forEach((module) => module.classList.remove("active-module"));
          const moduleId = button.dataset.module;
          const moduloSeleccionado = document.getElementById(moduleId);
          if (moduloSeleccionado) moduloSeleccionado.classList.add("active-module");
        });
      });

      
      const modal = document.querySelector(".modal");
      const openModal = document.getElementById("open-modal");
      const closeModal = document.querySelector(".close-modal");

      if (openModal)
        openModal.addEventListener("click", () => {

          // limpiar campos antes de abrir
          document.querySelector("#nombreCategoria").value = "";
          document.querySelector("#descripcionCategoria").value = "";
          modal.classList.add("active");
        });

      if (closeModal) closeModal.addEventListener("click", () => modal.classList.remove("active"));
      if (modal) modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });

      iniciarCategorias();
      iniciarProductos();
      iniciarPedidos();

    }, 100);
  });
});

let categorias = JSON.parse(localStorage.getItem("categorias")) || [];

function iniciarCategorias() {
  const botonGuardar = document.querySelector("#guardarCategoria");
  botonGuardar.addEventListener("click", agregarCategoria);
  pintarCategorias();
}

function agregarCategoria() {
  const nombre = document.querySelector("#nombreCategoria");
  const descripcion = document.querySelector("#descripcionCategoria");

  const nuevaCategoria = {
    nombre: nombre.value,
    descripcion: descripcion.value,
  };

  categorias.push(nuevaCategoria);
  localStorage.setItem("categorias", JSON.stringify(categorias));
  pintarCategorias();

  nombre.value = "";
  descripcion.value = "";
}

function pintarCategorias() {
  const lista = document.querySelector("#listaCategorias");
  lista.innerHTML = "";

  categorias.forEach((categoria, index) => {
    lista.innerHTML += `
      <tr>
        <td>${categoria.nombre}</td>
        <td>${categoria.descripcion}</td>
        <td>
          <div class="actions">
            <button class="edit" onclick="editarCategoria(${index})">Editar</button>
            <button class="delete" onclick="eliminarCategoria(${index})">Eliminar</button>
          </div>
        </td>
      </tr>
    `;
  });
}

function eliminarCategoria(index) {
  categorias.splice(index, 1);
  localStorage.setItem("categorias", JSON.stringify(categorias));
  pintarCategorias();
}

function editarCategoria(index) {
  const categoria = categorias[index];
  const modalCategoria = document.querySelector("#modalCategoria")

  document.querySelector("#nombreCategoria").value = categoria.nombre;
  document.querySelector("#descripcionCategoria").value = categoria.descripcion;

  modalCategoria.classList.add("active");

  const botonGuardar = document.querySelector("#guardarCategoria");
  botonGuardar.replaceWith(botonGuardar.cloneNode(true));

  document.querySelector("#guardarCategoria").addEventListener("click", () => {
    categorias[index] = {
      nombre: document.querySelector("#nombreCategoria").value,
      descripcion: document.querySelector("#descripcionCategoria").value,
    };

    localStorage.setItem("categorias", JSON.stringify(categorias));
    pintarCategorias();
    modalCategoria.classList.remove("active");

    const btn = document.querySelector("#guardarCategoria");
    btn.replaceWith(btn.cloneNode(true));
    document
      .querySelector("#guardarCategoria")
      .addEventListener("click", agregarCategoria);
  });
}

//PRODUCTOS

let productos = JSON.parse(localStorage.getItem("productos")) || [];

function iniciarProductos() {
  const btnGuardarProducto = document.querySelector("#guardarProducto");

  if (btnGuardarProducto) {
    btnGuardarProducto.addEventListener("click", agregarProducto);
  }

  const btnAbrirModal = document.querySelector("#open-modal-producto");

  if (btnAbrirModal)
    btnAbrirModal.addEventListener("click", () => {

      // limpiar campos antes de abrir
      document.querySelector("#codigoProducto").value = "";
      document.querySelector("#nombreProducto").value = "";
      document.querySelector("#categoriaProducto").value = "";
      document.querySelector("#precioProducto").value = "";
      document.querySelector("#imagenProducto").value = "";
      document.querySelector("#descripcionProducto").value = "";
      modalProducto.classList.add("active");
    });

  const modalProducto = document.querySelector("#modalProducto");
  btnAbrirModal.addEventListener("click", () => 
    modalProducto.classList.add("active"),
  );

  modalProducto.addEventListener("click", (e) => {
    if (e.target === modalProducto) modalProducto.classList.remove("active");
  });
  

  const btnCerrarModal = modalProducto.querySelector(".close-modal");

  btnCerrarModal.addEventListener("click", () =>
    modalProducto.classList.remove("active"),
  );

  pintarProductos();
}


function agregarProducto() {
  const nuevoProducto = {
    codigo: document.querySelector("#codigoProducto").value,
    nombre: document.querySelector("#nombreProducto").value,
    categoria: document.querySelector("#categoriaProducto").value,
    precio: document.querySelector("#precioProducto").value,
    imagen: document.querySelector("#imagenProducto").value,
    descripcion: document.querySelector("#descripcionProducto").value,
  };

  productos.push(nuevoProducto);
  localStorage.setItem("productos", JSON.stringify(productos));
  pintarProductos();

  //para que el modal esté limpio la prox vez q lo abra:

  document.querySelector("#codigoProducto").value = "";
  document.querySelector("#nombreProducto").value = "";
  document.querySelector("#categoriaProducto").value = "";
  document.querySelector("#precioProducto").value = "";
  document.querySelector("#imagenProducto").value = "";
  document.querySelector("#descripcionProducto").value = "";

  document.querySelector("#modal-producto").classList.remove("active");
}

function pintarProductos() {
  const lista = document.querySelector("#listaProductos");
  if (!lista) return;
  lista.innerHTML = "";


  productos.forEach((producto, index) => {
    lista.innerHTML += `
      <tr>
        <td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${producto.precio}</td>
        <td>${producto.imagen}</td>
        <td>${producto.descripcion}</td>
        <td>
          <div class="actions">
            <button class="edit" onclick="editarProducto(${index})">Editar</button>
            <button class="delete" onclick="eliminarProducto(${index})">Eliminar</button>
          </div>
        </td>
      </tr>
    `;
  });
}

function eliminarProducto(index) {
  productos.splice(index, 1);
  localStorage.setItem("productos", JSON.stringify(productos));
  pintarProductos();
}


function editarProducto(index) {
  const producto = productos[index];
  const modalProducto = document.querySelector("#modalProducto");

  document.querySelector("#codigoProducto").value = producto.codigo;
  document.querySelector("#nombreProducto").value = producto.nombre;
  document.querySelector("#categoriaProducto").value = producto.categoria;
  document.querySelector("#precioProducto").value = producto.precio;
  document.querySelector("#imagenProducto").value = producto.imagen;
  document.querySelector("#descripcionProducto").value = producto.descripcion;

  modalProducto.classList.add("active");

  const btnGuardarProducto = document.querySelector("#guardarProducto");
  btnGuardarProducto.replaceWith(btnGuardarProducto.cloneNode(true));

  document.querySelector("#guardarProducto").addEventListener("click", () => {
    productos[index] = {
      codigo: document.querySelector("#codigoProducto").value,
      nombre: document.querySelector("#nombreProducto").value,
      categoria: document.querySelector("#categoriaProducto").value,
      precio: document.querySelector("#precioProducto").value,
      imagen: document.querySelector("#imagenProducto").value,
      descripcion: document.querySelector("#descripcionProducto").value,
    };

    localStorage.setItem("productos", JSON.stringify(productos));
    pintarProductos();
    modalProducto.classList.remove("active");

    const btnNuevo = document.querySelector("#guardarProducto");
    btnNuevo.replaceWith(btnNuevo.cloneNode(true));
    document
      .querySelector("#guardarProducto")
      .addEventListener("click", agregarProducto);
  });
}

//PEDIDOS

function iniciarPedidos() {
  pintarPedidos();
}

function pintarPedidos() {
  const lista = document.querySelector("#listaPedidos");
  if (!lista) return;

  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  // ordenar de más reciente a más antiguo
  pedidos.sort((a, b) => b.id - a.id);

  lista.innerHTML = "";

  if (pedidos.length === 0) {
    lista.innerHTML = `
      <tr>
        <td colspan="6">No hay pedidos registrados.</td>
      </tr>
    `;
    return;
  }

  pedidos.forEach((pedido, indice) => {
    lista.innerHTML += `
      <tr>
        <td>#${pedido.id}</td>
        <td>${pedido.fecha}</td>
        <td>${pedido.cliente.nombre}</td>
        <td>$${Number(pedido.total).toLocaleString()}</td>
        <td>${pedido.estado}</td>
        <td>
          <button class="edit" onclick="verDetalle(${indice})">
            Ver detalle
          </button>
        </td>
      </tr>
    `;
  });
}

function verDetalle(indice) {
  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  pedidos.sort((a, b) => b.id - a.id);
  const pedido = pedidos[indice];

  const detalle = document.querySelector("#detallePedido");
  detalle.style.display = "block";

  detalle.innerHTML = `
    <h2>Detalle del pedido #${pedido.id}</h2>
    <hr class="detail-divider" />

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:20px">

      <div>
        <p class="detail-section-label">Datos del cliente</p>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
          <div class="detail-field">
            <label>Identificación</label>
            <p>${pedido.cliente.identificacion}</p>
          </div>
          <div class="detail-field">
            <label>Nombre</label>
            <p>${pedido.cliente.nombre}</p>
          </div>
          <div class="detail-field">
            <label>Dirección</label>
            <p>${pedido.cliente.direccion}</p>
          </div>
          <div class="detail-field">
            <label>Teléfono</label>
            <p>${pedido.cliente.telefono}</p>
          </div>
          <div class="detail-field">
            <label>Correo</label>
            <p>${pedido.cliente.correo}</p>
          </div>
        </div>
      </div>

      <div>
        <p class="detail-section-label">Resumen</p>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
          <div class="detail-field">
            <label>Fecha</label>
            <p>${pedido.fecha}</p>
          </div>
          <div class="detail-field">
            <label>Estado</label>
            <p>${pedido.estado}</p>
          </div>
          <div class="detail-field">
            <label>Total</label>
            <p>$${Number(pedido.total).toLocaleString()}</p>
          </div>
        </div>
      </div>

    </div>

    <hr class="detail-divider" />

    <p class="detail-section-label">Productos</p>
    <div class="table-container" style="margin-top:10px">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          ${pedido.productos.map(p => `
            <tr>
              <td>${p.nombre}</td>
              <td>$${p.precio}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <div style="text-align:right;margin-top:20px">
      <button class="edit" onclick="cerrarDetalle()">Cerrar</button>
    </div>
  `;
}

function cerrarDetalle() {
  document.querySelector("#detallePedido").style.display = "none";
}


