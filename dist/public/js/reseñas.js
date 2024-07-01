"use strict";

/**
 * Funcion para mostrar todos los comentarios 
 */

document.addEventListener('DOMContentLoaded', function () {
  var comentarios = document.querySelector('.comentarios');
  var datos = document.getElementById('bdDatos').value;
  var resenas = JSON.parse(datos);
  resenas.forEach(function (item) {
    var resena = document.createElement('div');
    resena.className = 'row bg-secondary comment rounded p-2 mb-2';
    resena.id = 'resena';
    var derecha = document.createElement('div');
    derecha.className = 'col-10 text-start';
    var nombre = document.createElement('h6');
    nombre.innerText = item.nombre;
    nombre.id = 'nombreReseña';
    var comentario = document.createElement('p');
    comentario.className = 'fs-6';
    comentario.innerText = item.comentario;
    comentario.id = 'comentario';
    derecha.appendChild(nombre);
    derecha.appendChild(comentario);
    resena.appendChild(derecha);
    comentarios.appendChild(resena);
  });
});

/**
 * Esta funcion es para enviar el comentario
 * @param {object} event el evento que desencadena el envio del comentario
 */
var enviarComentario = function enviarComentario(event) {
  var miComentario = document.getElementById('miComentario').value;
  var idUser = sessionStorage.getItem('id');
  var url = sessionStorage.getItem('urlsupra');
  var endpoint = url + "/api/resena";
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: idUser,
      comentario: miComentario
    })
  };
  fetch(endpoint, options).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.error == true) {
      alertify.error('Algo está errado');
    } else {
      window.location.reload();
    }
  })["catch"](function (err) {
    console.log("Tenemos un problema", err);
  });
};

/**
 * Esta funcion es para eliminar el comentario
 * @param {object} event el evento que desencadena la eliminacion comentario
 */
var eliminarComentario = function eliminarComentario(event) {
  var idUser = sessionStorage.getItem('id');
  var url = sessionStorage.getItem('urlsupra');
  var datosBd = document.getElementById('bdDatos');
  var datos = JSON.parse(datosBd);
  console.log(datos);
  var endpoint = url + "/api/resena";

  // const options = {
  //     method : 'DELETE',
  //     headers : {
  //         'Content-Type' : 'application/json'
  //     },
  //     body : JSON.stringify({
  //         id : idUser,
  //         comentario : miComentario
  //     })
  // };

  // fetch(endpoint, options)
  // .then(res => res.json())
  // .then(data => {
  //     if(data.error == true){
  //         alertify.error('Algo está errado');
  //     } else{
  //         window.location.reload();
  //     }
  // })
  // .catch(err => {
  //     console.log("Tenemos un problema", err);
  // })
};