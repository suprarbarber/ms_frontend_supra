const registrar = () => {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('email').value;
    const contra = document.getElementById('contrasena').value;
    const roll = document.querySelector('#roll').value;

    const url = sessionStorage.getItem('urlsupra');
    console.log(url);
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
        console.log(data);
        if(data.error == true){
            alertify.error('El usuario ya existe');
        } else{
            window.location.href = "/login"
        }
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}

// script para la verificacion de los campos 

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
