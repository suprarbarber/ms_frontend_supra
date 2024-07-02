"use strict";

/**
 * Esta funcion es para escoger el barbero
 * @param {number|string} id_barbero
 * @returns {void} - No retorna ningún valor.
 */

var escogerBarbero = function escogerBarbero(id_barbero) {
  var idBarbero = "".concat(id_barbero);
  sessionStorage.setItem("id_barbero", idBarbero);
  console.log(idBarbero);
};

// lo que hace despues de dar click en el boton de siguiente
/**
 * Funcion del boton siguiente de los barberos en la reserva
 */
var siguientePaso = function siguientePaso() {
  var id_barber = sessionStorage.getItem('id_barbero');
  if (id_barber === null || id_barber === "") {
    // alerta de si no seleccionado nada
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var appendAlert = function appendAlert(message, type) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">"), "   <div>".concat(message, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
      alertPlaceholder.append(wrapper);
    };
    appendAlert('No has seleccionado ningun barbero!', 'danger');
  } else {
    window.location.href = "./reserva-servicio";
  }
};
document.addEventListener('keyup', function (e) {
  if (e.target.matches('#buscador')) {
    document.querySelectorAll('#barber').forEach(function (element) {
      element.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? element.classList.remove('filtro') : element.classList.add('filtro');
    });
  }
});