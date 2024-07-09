/**
 * Funcion para realizar el registro
 */


const registrar = () => {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('email').value;
    const contra = document.getElementById('contrasena').value;
    const rol = document.querySelector('#rol').value;

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
            roll : rol
        })
    };
    
    fetch(endpoint, options)
    .then(res => res.json())
    .then(data => {
        if(data.status == 402){
            alertify.error('La cuenta ya ha sido creada');
        }else{
            if(data.error == true){
                alertify.error('Los campos no ha sido completados');
            }else{
                alertify.success('Su cuenta ha sido creada');
                document.querySelector('form').reset();
            }
        }
        
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}



