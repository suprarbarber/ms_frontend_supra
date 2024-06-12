const loguear = async() => {
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
            correo : correo,
            contrasena : contra
        })
    };
console.log(urlsupra);
    await fetch(urlsupra, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == true){
            console.log(data);
        }else{
            sessionStorage.setItem("token", data.body.token)                                                       
        }
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}