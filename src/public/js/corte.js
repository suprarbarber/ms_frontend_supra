// document.addEventListener('DOMContentLoaded', function() {
//     console.log('La página de perfil se ha cargado');
//     mostrarCortes();
// });
const mostrarCortes = async() => {
    const servicio = sessionStorage.getItem('servicio');
    const endpoint = sessionStorage.getItem('urlsupra') + "/api/corte"

    console.log(endpoint);

    const options = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            id : servicio
        })
    };
    
    let datos = "";

    await fetch(endpoint, options)
    .then(res => res.json())
    .then(data => {
        datos = data.body
        // console.log(data.body);
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}