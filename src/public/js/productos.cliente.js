const alerta = (event) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Ha sido agregrado al carrito",
    showConfirmButton: false,
    timer: 1500
  });
  
}

const reporte = (event) => {
  const reporte = new jsPDF();
  const nombre = event.target.parentElement.parentElement.parentElement;
  console.log(nombre);
  let fila = 10;
  let pageWidth = reporte.internal.pageSize.width;
  let fecha = new Date();

  reporte.line(10,10, pageWidth - 10, 10)
  reporte.text(10,fila, "Este es mi reporte")
  // reporte.text(10,20, `Hola mi productos favorito: ${nombre}`);
  reporte.text(10,fila+=10, "Este es mi reporte")
  reporte.text(10,fila+=10, "Este es mi reporte")
  reporte.text(10,fila+=10, `Fecha: ${fecha}`)
  // reporte.save("Reporte productos");
}