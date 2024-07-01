"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var id = sessionStorage.getItem('id');
  var url = sessionStorage.getItem('urlsupra');
  var recurso = url + "/api/cliente/".concat(id);
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    var datos = "";
    datos = data.body;
    document.getElementById('nombre').innerText = data.body[0].nombre;
    document.getElementById('id').innerText = data.body[0].id_cliente;
    document.getElementById('correo').innerText = data.body[0].correo;
    document.getElementById('telefono').innerText = data.body[0].telefono;
  });
});
var modificarNombre = function modificarNombre() {
  var nuevoNombre = document.getElementById('recipient-nombre').value;
  var url = sessionStorage.getItem('urlsupra');
  var id = sessionStorage.getItem('id');
  var endpoint = url + "/api/cliente/".concat(id);
  var options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nuevoNombre
    })
  };
  fetch(endpoint, options).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.error == true) {
      alertify.error('Algo está errado');
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su nombre ha sido actualizado con exito!",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(function () {
      window.location.href = "./perfil";
    }, 1600);
  })["catch"](function (err) {
    console.log("Tenemos un problema", err);
  });
};
var modificarCorreo = function modificarCorreo() {
  var nuevoCorreo = document.getElementById('recipient-correo').value;
  var url = sessionStorage.getItem('urlsupra');
  var id = sessionStorage.getItem('id');
  var endpoint = url + "/api/cliente/".concat(id);
  var options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      correo: nuevoCorreo
    })
  };
  fetch(endpoint, options).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.error == true) {
      alertify.error('Algo está errado');
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su correo ha sido actualizado con exito!",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(function () {
      window.location.href = "./perfil";
    }, 1600);
  })["catch"](function (err) {
    console.log("Tenemos un problema", err);
  });
};
var modificarTelefono = function modificarTelefono() {
  var nuevoTelefono = document.getElementById('recipient-telefono').value;
  var url = sessionStorage.getItem('urlsupra');
  var id = sessionStorage.getItem('id');
  var endpoint = url + "/api/cliente/".concat(id);
  var options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      telefono: nuevoTelefono
    })
  };
  fetch(endpoint, options).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.error == true) {
      alertify.error('Algo está errado');
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su telefono ha sido actualizado con exito!",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(function () {
      window.location.href = "./perfil";
    }, 1600);
  })["catch"](function (err) {
    console.log("Tenemos un problema", err);
  });
};
var desactivarCuenta = function desactivarCuenta() {
  var clave = document.getElementById('recipient-contra').value;
  var url = sessionStorage.getItem('urlsupra');
  var id = sessionStorage.getItem('id');
  var endpoint = url + "/api/cliente/".concat(id);
  var options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contrasena: clave
    })
  };
  fetch(endpoint, options).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
    console.log(data.error);
    if (data.error == true) {
      alertify.error('La contraseña es incorrecta');
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Su cuenta ha sido Eliminada",
        text: "Hasta luego",
        timer: 1600
      });
      setTimeout(function () {
        sessionStorage.clear();
        window.location.href = "./";
      }, 1600);
    }
  })["catch"](function (err) {
    console.log("Tenemos un problema", err);
  });
};