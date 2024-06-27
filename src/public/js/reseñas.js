document.addEventListener('DOMContentLoaded', () => {
    const myIdentificacion = sessionStorage.getItem('id');
    const comentarios = document.querySelector('.comentarios');
    const datos = document.getElementById('bdDatos').value;
    const resenas = JSON.parse(datos)

    // traer las identificaciones de la base de datos en reseñas 
    const id_cliente = resenas.map(item => item.identificacion);
    // compara con some() si la identificacion que queremos existe  
    const comparcionExistencia = id_cliente.some(identificacion => identificacion == myIdentificacion);


    if(comparcionExistencia){
        resenas.forEach(item => {
            const resena = document.createElement('div');
            resena.className = 'bg-secondary w-100 rounded text-start p-2 mb-2';
            resena.id = 'resena';
            
            const nombre = document.createElement('h6');
            nombre.innerText = item.nombre;
            nombre.id = 'nombreReseña';
            
            const comentario = document.createElement('p');
            comentario.className = 'fs-6';
            comentario.innerText = item.comentario;
            comentario.id = 'comentario';

            resena.appendChild(nombre)
            resena.appendChild(comentario)
            comentarios.appendChild(resena)
        });
    }

})

const enviarComentario = (event) => {
    const miComentario = document.getElementById('miComentario').value;
    const idUser = sessionStorage.getItem('id');
    const url = sessionStorage.getItem('urlsupra');
    const endpoint = url + "/api/resena";

    const options = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            id : idUser,
            comentario : miComentario
        })
    };

    fetch(endpoint, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == true){
            alertify.error('Algo está errado');
        } else{
            window.location.reload();
        }
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })

}