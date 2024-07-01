"use strict";

/**
 * Funcion que se ejecuta cuando entra en la vista cortes
 */

document.addEventListener('DOMContentLoaded', function () {
  cuerpo = document.getElementById('cuerpo');
  var corteData = JSON.parse(sessionStorage.getItem('corteData'));
  if (corteData && corteData.length > 0) {
    corteData.forEach(function (item) {
      var corte = document.createElement('div');
      corte.className = 'btn text-light text-center mx-2 my-2 corte';
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
    });
  } else {
    console.log("freddy");
  }
});
document.addEventListener('keyup', function (e) {
  if (e.target.matches('#buscador')) {
    document.querySelectorAll('.corte').forEach(function (element) {
      element.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? element.classList.remove('filtro') : element.classList.add('filtro');
    });
  }
});