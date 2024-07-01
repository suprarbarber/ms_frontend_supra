/**
 * Funcion para realizar el registro
 */

const registrar = () => {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('email').value;
    const contra = document.getElementById('contrasena').value;
    const roll = document.querySelector('#roll').value;

    const url = sessionStorage.getItem('urlsupra');
    const endpoint = url + "/api/registro"

    
    const options = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            id : id,
            nombre : nombre,
            telefono : telefono,
            correo : correo,
            contrasena : contra,
            roll : roll
        })
    };
    
    fetch(endpoint, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == true){
            alertify.error('Algo está errado');
        } 
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}


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
