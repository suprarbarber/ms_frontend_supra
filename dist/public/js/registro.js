"use strict";

/**
 * Funcion para realizar el registro
 */

var registrar = function registrar() {
  var id = document.getElementById('id').value;
  var nombre = document.getElementById('nombre').value;
  var telefono = document.getElementById('telefono').value;
  var correo = document.getElementById('email').value;
  var contra = document.getElementById('contrasena').value;
  var roll = document.querySelector('#roll').value;
  var url = sessionStorage.getItem('urlsupra');
  var endpoint = url + "/api/registro";
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      nombre: nombre,
      telefono: telefono,
      correo: correo,
      contrasena: contra,
      roll: roll
    })
  };
  fetch(endpoint, options).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.error == true) {
      alertify.error('Algo está errado');
    }
  })["catch"](function (err) {
    console.log("Tenemos un problema", err);
  });
};

/**
 * funcion para la verificaion de los campos del registro
 */
(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();