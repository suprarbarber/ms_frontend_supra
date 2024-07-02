/**
 * Funcion para mostrar todos los comentarios 
 */

document.addEventListener('DOMContentLoaded', () => {
    const comentarios = document.querySelector('.comentarios');
    const datos = document.getElementById('bdDatos').value;
    const resenas = JSON.parse(datos)


    resenas.forEach(item => {
        const resena = document.createElement('div');
        resena.className = 'row bg-secondary comment rounded p-2 mb-2';
        resena.id = 'resena';

        const derecha = document.createElement('div');
        derecha.className = 'col-10 text-start'
        
        const nombre = document.createElement('h6');
        nombre.innerText = item.nombre;
        nombre.id = 'nombreReseña';
        
        const comentario = document.createElement('p');
        comentario.className = 'fs-6';
        comentario.innerText = item.comentario;
        comentario.id = 'comentario';

        derecha.appendChild(nombre)
        derecha.appendChild(comentario)
        resena.appendChild(derecha)
        comentarios.appendChild(resena)
    });

})

/**
 * Esta funcion es para enviar el comentario
 * @param {object} event el evento que desencadena el envio del comentario
 */
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

/**
 * Esta funcion es para eliminar el comentario
 * @param {object} event el evento que desencadena la eliminacion comentario
 */
const eliminarComentario = (event) => {
    const idUser = sessionStorage.getItem('id');
    const url = sessionStorage.getItem('urlsupra');
    const datosBd = document.getElementById('bdDatos');
    const datos = JSON.parse(datosBd)

    console.log(datos);


    const endpoint = url + "/api/resena";

    // const options = {
    //     method : 'DELETE',
    //     headers : {
    //         'Content-Type' : 'application/json'
    //     },
    //     body : JSON.stringify({
    //         id : idUser,
    //         comentario : miComentario
    //     })
    // };

    // fetch(endpoint, options)
    // .then(res => res.json())
    // .then(data => {
    //     if(data.error == true){
    //         alertify.error('Algo está errado');
    //     } else{
    //         window.location.reload();
    //     }
    // })
    // .catch(err => {
    //     console.log("Tenemos un problema", err);
    // })

}