/**
 * Es funcion para loguear a los usuarios
 */

async function loguin() {
    const correo = document.getElementById('email').value;
    const contra = document.getElementById('contrasena').value;
    const url = document.getElementById('url').value;

    sessionStorage.setItem("urlsupra", url);
    const urlsupra = sessionStorage.getItem('urlsupra') + "/api/login"

    const options = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            // se deben poner lo campos tal cual estan en thunder client 
            correo : correo,
            contrasena : contra
        })
    };
    
    console.log(urlsupra);
    await fetch(urlsupra, options)
    .then(res => res.json())
    .then(data => {
        if(data.status == 401 ){
            alertify.error('Campos incompletos');
        }else{
            if(data.status === 405){
                alertify.error('Correo errado');
            }else{
                if(data.status === 406){
                    alertify.error('Contraseña errada');
                }else{
                    console.log(data.body);
                    sessionStorage.setItem("token", data.body.token)
                    sessionStorage.setItem("id", data.body.id)
                    
                    window.location.href = "./splash"                                
                }
            }
        }
            
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}