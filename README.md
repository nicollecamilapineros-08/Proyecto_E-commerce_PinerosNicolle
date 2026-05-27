
# Gymshark E-Commerce — Proyecto Académico

> Plataforma de comercio electrónico inspirada en **Gymshark**, desarrollada con tecnologías web fundamentales: HTML, CSS, JavaScript y Web Components.

---

## Descripción

Este proyecto es una aplicación web de e-commerce que simula el funcionamiento de una tienda online de ropa deportiva. Cuenta con dos entornos independientes pero conectados entre sí mediante **LocalStorage**: un panel de administración y una vista pública para clientes.

---

##  Demo

> Abre `Index/index.html` en tu navegador para comenzar.

Desde ahí puedes acceder como:
-  **Cliente** — Explorar productos, agregar al carrito y realizar pedidos
-  **Administrador** — Gestionar categorías, productos y visualizar pedidos

---

## 🗂️ Estructura del Proyecto

```bash
PROYECTO_E-COMMERCE_PINEROSNICOLLE/
│
├── Admin/                        # Panel de administración
│   ├── 01-html/
│   │   ├── 01-login.html         # Inicio de sesión
│   │   └── 02-dashboard.html     # Panel principal
│   ├── 02-css/
│   │   ├── 00-root.css           # Variables y estilos base
│   │   ├── 01-login.css          # Estilos del login
│   │   └── 02-dashboard.css      # Estilos del dashboard
│   ├── 03-js/
│   │   ├── 01-login.js           # Lógica de autenticación
│   │   ├── 02-dashboard.js       # Lógica de módulos
│   │   └── 03-modulos.js         # Web Components del admin
│   └── img/
│
├── Clientes/                     # Vista pública
│   ├── 01-html/
│   │   ├── 01-principal.html     # Catálogo de productos
│   │   ├── 02-detalles.html      # Detalle de producto
│   │   └── 03-carrito.html       # (Referencia — carrito como modal)
│   ├── 02-css/
│   │   ├── 00-root.css
│   │   ├── 01-principal.css
│   │   └── 02-detalles.css
│   ├── 03-js/
│   │   ├── 01-principal.js       # Lógica del catálogo y buscador
│   │   ├── 02-detalles.js        # Web Component detalle de producto
│   │   └── 03-carrito.js         # Web Component modal carrito
│   └── img/
│
├── Index/                        # Página de entrada
│   ├── index.html
│   ├── index.css
│   ├── indexBackground.jpg
│   └── logoGymshark.png
│
├── Wireframes/
│   └── Wireframes.png
│
└── README.md
```

---

## Funcionalidades

### Panel Administrador

#### Login
- Acceso protegido al dashboard mediante usuario y contraseña.

####  Módulo Categorías
- Crear nuevas categorías con nombre y descripción.
- Editar categorías existentes.
- Eliminar categorías.
- Lista actualizada en tiempo real.

####  Módulo Productos
- Crear productos con: código, nombre, categoría, precio, imagen (URL) y descripción.
- Editar y eliminar productos.
- Lista actualizada en tiempo real.

####  Módulo Pedidos
- Visualización de todos los pedidos realizados por clientes.
- Ordenados del más reciente al más antiguo.
- Datos del cliente: nombre, identificación, dirección, teléfono y correo.
- Vista de detalle completo por pedido con lista de productos comprados.

---

###  Vista Cliente

#### Catálogo Principal
- Muestra todos los productos registrados por el administrador.
- **Buscador** por nombre del producto.
- **Filtro** por categoría.
- Cards con imagen, nombre, categoría y precio.

#### Detalle de Producto
- Vista ampliada del producto seleccionado.
- Imagen, nombre, categoría, descripción y precio.
- Botón para agregar al carrito.
- Botón para volver al catálogo.

#### 🛒 Carrito de Compras
- Modal accesible desde cualquier página del cliente.
- Muestra imagen miniatura, nombre y precio de cada producto.
- Opción de eliminar productos del carrito.
- Cálculo automático del total.
- Botón **Comprar** que despliega formulario con datos del cliente:
  - Número de identificación
  - Nombre completo
  - Dirección de envío
  - Teléfono
  - Correo electrónico
- Al confirmar, el pedido se guarda y aparece en el dashboard del admin.
- Registro automático de la fecha del pedido.



##  Tecnologías Utilizadas

| Tecnología | Uso |
| HTML5 | Estructura de las páginas |
| CSS3 | Estilos, diseño oscuro y responsive |
| JavaScript | Lógica, CRUD y navegación |
| Web Components | Componentes reutilizables (`<barra-lateral>`, `<tabla-categorias>`, `<modal-carrito>`, etc.) |
| LocalStorage | Persistencia de datos entre Admin y Cliente |

---

##  Diseño

- Estética **dark** inspirada en la marca Gymshark.
- Paleta basada en negro, grises oscuros y blanco.
- Tipografía con espaciado amplio y estilo deportivo.
- Diseño **responsive** adaptable a distintos tamaños de pantalla.

---


## 👩‍💻 Autora

**Nicolle Camila Piñeros**
Proyecto académico — Desarrollo Web Frontend

---

> _Este proyecto fue desarrollado con fines académicos como ejercicio práctico de desarrollo frontend._
