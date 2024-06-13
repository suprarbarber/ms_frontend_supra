const loguin = async() => {
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
        if(data.error == true){
            alertify.error('Contraseña errada');
        }else{
            sessionStorage.setItem("token", data.body.token)
            window.location.href = "./inicio"                                                     
        }
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}