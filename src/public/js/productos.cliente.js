const alerta = (event) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Ha sido agregrado al carrito",
    showConfirmButton: false,
    timer: 1500
  });
  
}