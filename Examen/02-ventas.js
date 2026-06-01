document.addEventListener("DOMContentLoaded", () => {
    iniciarPedidos();
    reporteVentas();
    totalVentas();
});

import { iniciarPedidos } from "../Admin/03-js/03-modulos";

const boton = document.querySelector("#btnBuscarReporte");
const txtAnio= document.getElementById("anio");
const txtMes= document.getElementById("mes");

boton.addEventListener("click", reporteVentas);
txtAnio.addEventListener("keydown", e => 
  {
    if (e.key === "Enter") 
      reporteVentas();
  });
txtMes.addEventListener("keydown", e => 
  {
    if (e.key === "Enter") 
      reporteVentas();
  });

function reporteVentas () { 
    let pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidos.sort((a, b) => b.id - a.id);
    if (pedidos.length === 0) {
    lista.innerHTML = `
      <tr>
        <td colspan="6">No hay pedidos registrados este mes.</td>
      </tr>
    `;
    return;
  } else {
    pedidos.forEach((pedido, indice) => {
    lista.innerHTML += `
      <tr>
        <td>#${pedido.id}</td>
        <td>${pedido.fecha}.toLocaleDateString()</td>
        <td>$${Number(pedido.total).toLocaleString()}</td>`
    })};
};

function totalVentas() {
    const total = pedido.total.toLocaleString()

}
