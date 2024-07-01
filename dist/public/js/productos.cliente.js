"use strict";

/**
 * Esta funcion es para crear el reporte en pdf
 * @param {object} event el evento que desencadena la creación del reporte 
 */

var reporte = function reporte(event) {
  var reporte = new jsPDF();
  var productos = event.target.parentElement.parentElement.parentElement.children[1].innerText;
  var pageWidth = reporte.internal.pageSize.width;
  var fecha = new Date();
  var fila = 10;
  var imagenRuta = './img/logosupra.png';

  // Texto estático antes de la imagen
  reporte.setFontSize(12);
  reporte.text(60, fila += 55, "REPORTE DE TODOS NUESTROS PRODUCTOS");
  fila += 10;
  reporte.text(10, fila += 10, "Lista de productos:");
  reporte.text(10, fila += 10, " ".concat(productos));

  // Dibujar una línea
  reporte.line(10, fila += 160, pageWidth - 10, fila);
  reporte.text(10, fila += 10, "Autor(a): Angie Nataly Nohava Vargas");
  reporte.text(10, fila += 10, "Fecha: ".concat(fecha));

  // Cargar y dibujar una imagen
  var imagen = new Image();
  imagen.onload = function () {
    reporte.addImage(imagen, 'PNG', 50, 1, 100, 50); // Ajusta tamaño y posición según necesites
    reporte.save("Reporte_Productos.pdf");
  };
  imagen.src = imagenRuta;
};