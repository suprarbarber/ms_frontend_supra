"use strict";

/**
 * Funcion para mostrar los cortes
 */
document.addEventListener('DOMContentLoaded', function () {
  cuerpo = document.getElementById('cuerpo');
  var corteData = JSON.parse(sessionStorage.getItem('corteData'));
  if (corteData && corteData.length > 0) {
    corteData.forEach(function (item) {
      var corte = document.createElement('button');
      corte.className = 'btn btn-dark text-center mx-2 my-2';
      corte.id = 'corte';
      var imagen = document.createElement('img');
      imagen.className = 'mt-2 rounded';
      imagen.src = './img/usuario.png';
      imagen.width = 90;
      imagen.height = 95;
      imagen.id = 'imagen';
      var nombreCorte = document.createElement('h3');
      nombreCorte.className = 'fs-4 mt-2';
      nombreCorte.id = 'nombreCorte';
      nombreCorte.innerText = item.nombre;
      corte.appendChild(imagen);
      corte.appendChild(nombreCorte);
      cuerpo.appendChild(corte);
      corte.addEventListener("click", function () {
        sessionStorage.setItem('id_corte', item.id_corte);
      });
    });
  } else {
    console.log("No se encontraron datos");
  }
});

// lo que hace despues de dar click en el boton de siguiente
/**
 * Funcion del boton siguiente de los barberos en la reserva
 */
var siguientePaso = function siguientePaso() {
  var id_corte = sessionStorage.getItem('id_corte');
  if (id_corte === null || id_corte === "") {
    // alerta de si no seleccionado nada
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var appendAlert = function appendAlert(message, type) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">"), "   <div>".concat(message, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
      alertPlaceholder.append(wrapper);
    };
    appendAlert('No has seleccionado ningún servicio!', 'danger');
  } else {
    window.location.href = "./reserva-horario";
  }
};
document.addEventListener('keyup', function (e) {
  if (e.target.matches('#buscador')) {
    document.querySelectorAll('.corte').forEach(function (element) {
      element.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? element.classList.remove('filtro') : element.classList.add('filtro');
    });
  }
});