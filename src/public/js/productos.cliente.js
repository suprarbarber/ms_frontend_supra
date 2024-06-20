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

  reporte.text(10,10, "Este es mi reporte")
  reporte.save("Reporte productos");
}