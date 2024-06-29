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
        document.getElementById('contra').innerText = data.body[0].contrasena
        console.log(data.body[0]);
    })
})