"use strict";

var dias = document.getElementById('num-dias');
dias.addEventListener('click', function (event) {
  event.target.classList.add('seleccionado');
  id_dia = "".concat(event.target.id);
  sessionStorage.setItem('id_dia', id_dia);
});

/**
 * Esta funcion es para obtener el id del boton
 * @param {number|string} btn contiene informacion del boton
 */
function turno(btn) {
  var id_turno = btn.id;
  sessionStorage.setItem("id_turno", id_turno);
}
function finalizar() {
  var idHorario = sessionStorage.getItem('id_turno');
  if (idHorario == null || idHorario == "") {
    // alerta de si no seleccionado nada
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var appendAlert = function appendAlert(message, type) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">"), "   <div>".concat(message, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
      alertPlaceholder.append(wrapper);
    };
    appendAlert('No has seleccionado ningún turno!', 'danger');
  } else {
    var id = sessionStorage.getItem('id');
    var id_barbero = sessionStorage.getItem('id_barbero');
    var id_turno = sessionStorage.getItem('id_turno');
    var _id_dia = sessionStorage.getItem('id_dia');
    var id_servicio = sessionStorage.getItem('id_servicio');
    var id_corte = sessionStorage.getItem('id_corte');
    var url = sessionStorage.getItem('urlsupra');
    console.log(url);
    var endpoint = url + "/api/cita";
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        id_barbero: id_barbero,
        id_turno: id_turno,
        id_servicio: id_servicio,
        id_corte: id_corte,
        id_fecha: _id_dia
      })
    };
    fetch(endpoint, options).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
      if (data.error == true) {
        alertify.error('Algo está errado');
      } else {
        sessionStorage.removeItem('id_barbero');
        sessionStorage.removeItem('id_corte');
        sessionStorage.removeItem('id_turno');
        sessionStorage.removeItem('id_servicio');
        sessionStorage.removeItem('corteData');
        sessionStorage.removeItem('id_dia');
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se ha guardado con exito!",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(function () {
          window.location.href = "./inicio";
        }, 1600);
      }
    })["catch"](function (err) {
      console.log("Tenemos un problema", err);
    });
  }
}