const registrar = () => {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('email').value;
    const contra = document.getElementById('contrasena').value;
    const roll = document.getElementById('disabledSelect').value;

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
        if(data.error == true){
            alertify.error('Error message');
        } else{
            window.location.href = "/login"
           console.log("hola");
        }
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}

// const validarCampos = () => {
//     return true;
// }