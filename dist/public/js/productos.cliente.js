/**
 * Esta funcion es para crear el reporte en pdf
 * @param {object} event el evento que desencadena la creación del reporte 
 */

const reporte = (event) => {
  const reporte = new jsPDF();
  // Seleccionar todos los elementos con la clase 'card' para obtener los productos
  const productos = Array.from(event.target.parentElement.parentElement.parentElement.querySelectorAll('.card'));
  
  let pageWidth = reporte.internal.pageSize.width;
  let fecha = new Date();
  let fila = 10;
  
  let imagenRuta = './img/logosupra.png';

  // Texto estático antes de la imagen
  reporte.setFontSize(12);
  reporte.text(60, fila += 55, "REPORTE DE TODOS NUESTROS PRODUCTOS");
  fila += 10;
  reporte.text(10, fila += 10, "Lista de productos:");

  // Convertir productos en un array y usar forEach
  productos.forEach((producto, i) => {
    // Extraer el nombre, descripción y precio
    const nombre = producto.querySelector('.nombre').innerText.trim();
    const descripcion = producto.querySelector('.descripcion').innerText.trim();
    const precio = producto.querySelector('.precio').innerText.trim();
    
    // Añadir el texto del producto al PDF
    reporte.text(10, fila += 10, `Producto ${i + 1}: ${nombre}`);
    reporte.text(10, fila += 10, `Descripción: ${descripcion}`);
    reporte.text(10, fila += 10, `Precio: ${precio}`);

    // Asegurarse de que el contenido no exceda el límite de la página
    if (fila > 250) {  // Ajusta el valor según sea necesario
      reporte.addPage();
      fila = 10;  // Reinicia la posición de la fila en la nueva página
    }
  });

  // Dibujar una línea
  reporte.line(10, fila += 10, pageWidth - 10, fila);

  // Añadir información adicional
  reporte.text(10, fila += 10, "Autor(a): Angie Nataly Nohava Vargas");
  reporte.text(10, fila += 10, `Fecha: ${fecha.toLocaleDateString()}`); 

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