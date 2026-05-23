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

                    <tbody>

                        <tr>

                            <td>Oversize</td>

                            <td>Prendas amplias deportivas</td>

                            <td>

                                <div class="actions">

                                    <button class="edit">
                                        Editar
                                    </button>

                                    <button class="delete">
                                        Eliminar
                                    </button>

                                </div>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>





            <!-- MODAL -->

            <div class="modal">

                <div class="modal-content">

                    <button class="close-modal">
                        X
                    </button>

                    <h2>Nueva categoría</h2>

                    <form>

                        <input type="text" placeholder="Nombre categoría">

                        <textarea placeholder="Descripción"></textarea>

                        <button type="button">
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

                <button>
                    + Agregar producto
                </button>

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

                    <tbody>

                        <tr>

                            <td>001</td>

                            <td>Oversize Black</td>

                            <td>Oversize</td>

                            <td>$120.000</td>

                            <td>imagen.jpg</td>

                            <td>Camiseta deportiva</td>

                            <td>

                                <div class="actions">

                                    <button class="edit">
                                        Editar
                                    </button>

                                    <button class="delete">
                                        Eliminar
                                    </button>

                                </div>

                            </td>

                        </tr>

                    </tbody>

                </table>

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

                            <th>Pedido</th>
                            <th>Cliente</th>
                            <th>Total</th>
                            <th>Estado</th>
                            <th>Detalle</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>#001</td>

                            <td>Juan Pérez</td>

                            <td>$320.000</td>

                            <td>Pagado</td>

                            <td>

                                <button class="edit">
                                    Ver detalle
                                </button>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>





            <div class="order-detail">

                <h2>Detalle del pedido</h2>

                <p><strong>Cliente:</strong> Juan Pérez</p>

                <p><strong>Producto:</strong> Oversize Black</p>

                <p><strong>Cantidad:</strong> 2</p>

                <p><strong>Total:</strong> $320.000</p>

                <p><strong>Dirección:</strong> Calle 10 #20-30</p>

            </div>

        `;
  }
}

customElements.define("tabla-pedidos", Pedidos);
