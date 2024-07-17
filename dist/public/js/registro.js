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
    const url = document.getElementById('url').value;

    // se traen los div de cada campo 
    const campoId = document.querySelector('.campo-id');
    const campoNombre = document.querySelector('.campo-nombre');
    const campoTelefono = document.querySelector('.campo-telefono');
    const campoCorreo = document.querySelector('.campo-correo');
    const campoClave = document.querySelector('.campo-clave');
    const campoRol = document.querySelector('.campo-roll');

    let okid = 0;
    let okemail = 0;
    let oknom = 0;
    let okroll = 0;
    let oktel = 0;
    let okcontra = 0;


    // este será mi enpoint 
    const endpoint = url + "/api/registro";

    console.log(id, nombre, telefono, correo, contra, rol, endpoint);

    if (id == "" || id == null || id == 0) {
        mostrarError(campoId, 'Este campo es obligatorio');
    } else {
        if (id.length < 8) {
            mostrarError(campoId, 'La identificación debe tener 8 caracteres');
        }else{
            removerError(campoId);
            okid = 1
        }
    }
    
    if (nombre == "" || nombre == null) {
        mostrarError(campoNombre, 'Este campo es obligatorio');
        
    }else{
        removerError(campoNombre);
        oknom = 1
    }
    
    if (telefono == "" || telefono == null) {
        mostrarError(campoTelefono, 'Este campo es obligatorio');
        
    } else {
        if (telefono.length < 10) {
            mostrarError(campoTelefono, 'El teléfono debe tener al menos 10 caracteres');
        }else{
            removerError(campoTelefono);
            oktel = 1
        }
    }
    
    if (correo == "" || correo == null) {
        mostrarError(campoCorreo, 'Este campo es obligatorio');

    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(correo)) {
            mostrarError(campoCorreo, 'El correo no es valido');
        }else{
            removerError(campoCorreo);
            okemail = 1
        }
    }

    if (contra == "" || contra == null) {
        mostrarError(campoClave, 'Este campo es obligatorio');
    } else {
        if (contra.length < 5) {
            mostrarError(campoClave, 'La contraseña dene tener al menos 5 caracteres');
        }else{
            removerError(campoClave);
            okcontra = 1
        }
    }

    if (rol == 'Seleccione un rol') {
        mostrarError(campoRol, 'Este campo es obligatorio');
        
    }else{
        removerError(campoRol);
        okroll = 1
    }

    if(okid == 1 && oknom == 1 && oktel == 1 && okemail == 1 && okroll == 1){
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
            console.log(data);
            if(data.status == 402){
                alertify.error('La cuenta ya existe');
            }else{
                if(data.error == true){
                    alertify.error('Error')
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


}


// Función para mostrar mensaje de error
function mostrarError(campo, mensaje) {
    // Remover mensajes de error previos
    const mensajePrevio = campo.querySelector('.text-danger');
    if (mensajePrevio) {
        mensajePrevio.remove();
    }
    // Crear y agregar nuevo mensaje de error
    const error = document.createElement('div');
    error.className = 'text-danger';
    error.innerText = mensaje;
    campo.appendChild(error);
}

// Función para remover mensajes de error
function removerError(campo) {
    const mensajePrevio = campo.querySelector('.text-danger');
    if (mensajePrevio) {
        mensajePrevio.remove();
    }
}


