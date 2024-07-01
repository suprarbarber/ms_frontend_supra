"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var id = sessionStorage.getItem('id');
  var url = sessionStorage.getItem('urlsupra');
  var recurso = url + "/api/cita?id=".concat(id);
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    var datos = "";
    datos = data.body;
    datos.forEach(function (item) {
      var reservas = document.getElementById('citas');
      var cita = document.createElement('div');
      cita.className = 'row';
      cita.id = 'cita';
      var colEstado = document.createElement('div');
      colEstado.className = 'col-2 text-center';
      var tituEstado = document.createElement('h6');
      tituEstado.className = '';
      tituEstado.textContent = 'Estado';
      var estado = document.createElement('p');
      estado.className = '';
      estado.textContent = item.estado_reserva;
      var colFecha = document.createElement('div');
      colFecha.className = 'col-2 text-center ';
      var tituFecha = document.createElement('h6');
      tituFecha.className = '';
      tituFecha.textContent = 'Fecha';
      var fechaISO = item.fecha;
      var campofecha = fechaISO.split('T')[0];
      var fecha = document.createElement('p');
      fecha.className = '';
      fecha.textContent = campofecha;
      var colTurno = document.createElement('div');
      colTurno.className = 'col-2 text-center';
      var tituTurno = document.createElement('h6');
      tituTurno.className = '';
      tituTurno.textContent = 'Turno';
      var turno = document.createElement('p');
      turno.className = '';
      turno.textContent = item.turno;
      var colCorte = document.createElement('div');
      colCorte.className = 'col-2 text-center ';
      var tituCorte = document.createElement('h6');
      tituCorte.className = '';
      tituCorte.textContent = 'Corte';
      var corte = document.createElement('p');
      corte.className = '';
      corte.textContent = item.corte;
      var colBarbero = document.createElement('div');
      colBarbero.className = 'col-2 text-center ';
      var imgBarbero = document.createElement('img');
      imgBarbero.className = 'mt-2 rounded';
      imgBarbero.src = './img/usuario.png';
      imgBarbero.width = 50;
      imgBarbero.id = 'imagen';
      var barbero = document.createElement('p');
      barbero.className = '';
      barbero.textContent = item.barbero;
      var colBotones = document.createElement('div');
      colBotones.className = 'col-2';
      var btnReprogramar = document.createElement('button');
      btnReprogramar.className = 'btn btn-info p-2 mb-2';
      btnReprogramar.textContent = 'Reprogramar';
      btnReprogramar.id = 'btnReprogramar';
      btnReprogramar.onclick = function () {
        Swal.fire({
          title: "Estas seguro de reprogramar la cita?",
          showCancelButton: true,
          confirmButtonText: "Si",
          denyButtonText: "Cancelar"
        }).then(function (result) {
          if (result.isConfirmed) {
            sessionStorage.setItem('id_reserva', item.id_reserva);
            sessionStorage.removeItem('id_servicio');
            sessionStorage.removeItem('id_barbero');
            sessionStorage.removeItem('id_corte');
            sessionStorage.removeItem('id_horario');
            sessionStorage.removeItem('corteData');
            window.location.href = "./reserva-horario-reprogramacion";
          }
        });
      };
      var btnCarcelar = document.createElement('button');
      btnCarcelar.className = 'btn btn-danger p-2';
      btnCarcelar.textContent = 'Cancelar';
      btnCarcelar.id = 'btnCancelar';
      btnCarcelar.onclick = function () {
        Swal.fire({
          title: "Estas seguro de cancelar la cita?",
          showCancelButton: true,
          confirmButtonText: "Si",
          denyButtonText: "No"
        }).then(function (result) {
          if (result.isConfirmed) {
            var endpoint = url + "/api/cita/".concat(item.id_reserva);
            var options = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              }
            };
            fetch(endpoint, options).then(function (res) {
              return res.json();
            }).then(function (data) {
              var datos = "";
              datos = data.body;
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Su cita ha sido cancelada",
                showConfirmButton: false,
                timer: 1500
              });
              setTimeout(function () {
                window.location.href = "./citas";
              }, 1600);
            })["catch"]();
          }
        });
      };
      if (item.estado_reserva != 'REPROGRAMADO') {
        colBotones.appendChild(btnReprogramar);
      }
      colBotones.appendChild(btnCarcelar);
      colBarbero.appendChild(imgBarbero);
      colBarbero.appendChild(barbero);
      colCorte.appendChild(tituCorte);
      colCorte.appendChild(corte);
      colTurno.appendChild(tituTurno);
      colTurno.appendChild(turno);
      colFecha.appendChild(tituFecha);
      colFecha.appendChild(fecha);
      colEstado.appendChild(tituEstado);
      colEstado.appendChild(estado);
      cita.appendChild(colEstado);
      cita.appendChild(colFecha);
      cita.appendChild(colTurno);
      cita.appendChild(colCorte);
      cita.appendChild(colBarbero);
      if (item.estado_reserva != 'CANCELADO') {
        cita.appendChild(colBotones);
      }
      reservas.appendChild(cita);
    });
  });
});