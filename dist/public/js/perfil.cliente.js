document.addEventListener('DOMContentLoaded', () => {
    const id = sessionStorage.getItem('id');
    const url = sessionStorage.getItem('urlsupra');
    
    const recurso = url + `/api/cliente/${id}`
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        let datos = "";
        datos = data.body;
        document.getElementById('nombre').innerText = data.body[0].nombre
        document.getElementById('id').innerText = data.body[0].id_cliente
        document.getElementById('correo').innerText = data.body[0].correo
        document.getElementById('telefono').innerText = data.body[0].telefono
    })
})

const modificarNombre = () =>{
    const nuevoNombre = document.getElementById('recipient-nombre').value;
    const url = sessionStorage.getItem('urlsupra');
    const id = sessionStorage.getItem('id');

    const endpoint = url + `/api/cliente/${id}`


    const options = {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            nombre : nuevoNombre,
        })
    };
    
    fetch(endpoint, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == true){
            alertify.error('Algo está errado');
        }
            
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Su nombre ha sido actualizado con exito!",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = "./perfil"
        }, 1600);
        
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })

}
const modificarCorreo = () =>{
    const nuevoCorreo = document.getElementById('recipient-correo').value;
    const url = sessionStorage.getItem('urlsupra');
    const id = sessionStorage.getItem('id');

    const endpoint = url + `/api/cliente/${id}`


    const options = {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            correo : nuevoCorreo,
        })
    };
    
    fetch(endpoint, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == true){
            alertify.error('Algo está errado');
        }
            
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Su correo ha sido actualizado con exito!",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = "./perfil"
        }, 1600);
        
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })

}
const modificarTelefono = () =>{
    const nuevoTelefono = document.getElementById('recipient-telefono').value;
    const url = sessionStorage.getItem('urlsupra');
    const id = sessionStorage.getItem('id');

    const endpoint = url + `/api/cliente/${id}`


    const options = {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            telefono : nuevoTelefono,
        })
    };
    
    fetch(endpoint, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == true){
            alertify.error('Algo está errado');
        }
            
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Su telefono ha sido actualizado con exito!",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = "./perfil"
        }, 1600);
        
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })

}

const desactivarCuenta = () => {
    const clave = document.getElementById('recipient-contra').value;
    const url = sessionStorage.getItem('urlsupra');
    const id = sessionStorage.getItem('id');
    
    const endpoint = url + `/api/cliente/${id}`
    
    
    const options = {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            contrasena : clave,
        })
    };
    
    fetch(endpoint, options)
    .then(res => res.json())
    .then(data => {

        console.log(data);
        console.log(data.error);
        
        if(data.error == true){
            alertify.error('La contraseña es incorrecta');
        }else{
            Swal.fire({
                position: "center",
                icon: "info",
                title: "Su cuenta ha sido Eliminada",
                text: "Hasta luego",
                timer: 1600
            });
    
            setTimeout(() => {
                sessionStorage.clear()
                window.location.href = "./"
            }, 1600);
        }


    })

    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}