document.addEventListener('DOMContentLoaded', () => {
    const myIdentificacion = sessionStorage.getItem('id');
    const misComentarios = document.querySelector('.comentarios-propios');
    const otrosComentarios = document.querySelector('.comentarios-externos');
    const datos = document.getElementById('bdDatos').value;
    const resenas = JSON.parse(datos)

    // traer las identificaciones de la base de datos en reseñas 
    const id_cliente = resenas.map(item => item.identificacion);
    // compara con some() si la identificacion que queremos existe  
    const comparcionExistencia = id_cliente.some(identificacion => identificacion == myIdentificacion);



    console.log(resenas);

    if(comparcionExistencia){
        resenas.forEach(item => {
            if(item.identificacion == myIdentificacion){
                const resena = document.createElement('div');
                resena.className = 'bg-secondary w-100 rounded text-start p-2';
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
                misComentarios.appendChild(resena)
            }

            if(item.identificacion != myIdentificacion){
                
                const resena = document.createElement('div');
                resena.className = 'bg-secondary w-100 rounded text-start p-1 mb-4';
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
                otrosComentarios.appendChild(resena)
            }
        });
    }

})