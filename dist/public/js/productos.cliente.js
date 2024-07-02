/**
 * Esta funcion es para crear el reporte en pdf
 * @param {object} event el evento que desencadena la creación del reporte 
 */

const reporte = (event) => {
  const reporte = new jsPDF();
  const productos = event.target.parentElement.parentElement.parentElement.children[1].innerText;
  let pageWidth = reporte.internal.pageSize.width;
  let fecha = new Date();
  let fila = 10;
  
  let imagenRuta = './img/logosupra.png';

  
  // Texto estático antes de la imagen
  reporte.setFontSize(12);
  reporte.text(60, fila += 55, "REPORTE DE TODOS NUESTROS PRODUCTOS");
  fila += 10;
  reporte.text(10, fila += 10, "Lista de productos:");
  reporte.text(10, fila += 10, ` ${productos}`);

  // Dibujar una línea
  reporte.line(10, fila+=160, pageWidth - 10, fila);
  
  reporte.text(10, fila += 10, "Autor(a): Angie Nataly Nohava Vargas");
  reporte.text(10, fila += 10, `Fecha: ${fecha}`);

  // Cargar y dibujar una imagen
  const imagen = new Image();
  imagen.onload = function() {
    reporte.addImage(imagen, 'PNG', 50, 1, 100, 50); // Ajusta tamaño y posición según necesites
    reporte.save("Reporte_Productos.pdf");
  };
  imagen.src = imagenRuta;
};

document.addEventListener('keyup', function(e) {

  if(e.target.matches('#buscador')){

      document.querySelectorAll('#tarjeta').forEach(element => {
          element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ?element.classList.remove('filtro')
          :element.classList.add('filtro')
      });
  }
});