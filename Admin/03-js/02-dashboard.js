class Sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

            <div class="logo">

                <img src="../img/logoGymshark.png" alt="Logo">
                <h2>GYMSHARK</h2>

            </div>

            <nav>

                <button class="nav-btn active" data-module="categories-module">
                    Categorías
                </button>

                <button class="nav-btn" data-module="products-module">
                    Productos
                </button>

                <button class="nav-btn" data-module="orders-module">
                    Pedidos
                </button>

            </nav>

        `;
    }
}

customElements.define("barra-lateral", Sidebar);

class Categorias extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

            <div class="module-header">

                <h1>CATEGORÍAS</h1>

                <button id="open-modal">
                    + Agregar categoría
                </button>

            </div>

            <div class="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acciones</th>

                        </tr>

                    </thead>

                    <tbody id="listaCategorias"></tbody>

                </table>

            </div>


            <!-- MODAL -->

            <div class="modal" id="modalCategoria">

                <div class="modal-content">

                    <button class="close-modal">
                        X
                    </button>

                    <h2>Nueva categoría</h2>

                    <form>

                        <input 
                            type="text"
                            id="nombreCategoria"
                            placeholder="Nombre categoría"
                        >

                        <textarea 
                            id="descripcionCategoria"
                            placeholder="Descripción"
                        ></textarea>

                        <button type="button" id="guardarCategoria">
                            Guardar categoría
                        </button>

                    </form>

                </div>

            </div>

        `;
    }
}

customElements.define("tabla-categorias", Categorias);

class Productos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

      <div class="module-header">
        <h1>PRODUCTOS</h1>
        <button id="open-modal-producto">+ Agregar producto</button>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="listaProductos">
          </tbody>
        </table>
      </div>

      <!-- MODAL -->
      <div class="modal" id="modalProducto">
        <div class="modal-content">

          <button class="close-modal">X</button>

          <h2>Nuevo producto</h2>

          <form>
            <input type="text" id="codigoProducto" placeholder="Código producto" />

            <input type="text" id="nombreProducto" placeholder="Nombre producto" />

            <input type="text" id="categoriaProducto" placeholder="Categoría producto" />

            <input type="text" id="precioProducto" placeholder="Precio producto" />

            <input type="url" id="imagenProducto" placeholder="URL imagen producto" />

            <textarea id="descripcionProducto" placeholder="Descripción"></textarea>

            <button type="button" id="guardarProducto">
            Guardar producto
            </button>
          </form>

        </div>
      </div>

    `;
  }
}

customElements.define("tabla-productos", Productos);

class Pedidos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="module-header">
        <h1>PEDIDOS</h1>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody id="listaPedidos"></tbody>
        </table>
      </div>

      <div id="detallePedido" class="order-detail" style="display:none">
      </div>
    `;
  }
}

customElements.define("tabla-pedidos", Pedidos);
