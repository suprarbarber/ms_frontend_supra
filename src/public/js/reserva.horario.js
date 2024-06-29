const dias = document.getElementById('num-dias');

dias.addEventListener('click', function(event) {
    event.target.classList.add('seleccionado');
})

/**
 * Esta funcion es para obtener el id del boton
 * @param {number|string} btn contiene informacion del boton
 */
function turno(btn) {
    const id_turno = btn.id;
    sessionStorage.setItem("id_horario", btn.id)
}

function finalizar() {
    const idHorario = sessionStorage.getItem('id_horario')
    if(idHorario == null || idHorario == ""){
        // alerta de si no seleccionado nada
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

        const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
        }

        appendAlert('No has seleccionado ningun barbero!', 'danger')
    }else{
        const id = sessionStorage.getItem('id');
        const id_barbero = sessionStorage.getItem('id_barbero');
        const id_horario = sessionStorage.getItem('id_horario');
        const id_servicio = sessionStorage.getItem('id_servicio');
        const id_corte = sessionStorage.getItem('id_corte');
        const url = sessionStorage.getItem('urlsupra');

        console.log(url);
        const endpoint = url + "/api/cita"

        const options = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                id : id,
                id_barbero : id_barbero,
                id_horario : id_horario,
                id_servicio : id_servicio,
                id_corte : id_corte
            })
        };

        fetch(endpoint, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.error == true){
                alertify.error('Algo está errado');
            }else{
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Su cita ha sido reservada",
                    showConfirmButton: false,
                    timer: 1500
                });

                setTimeout(() => {
                    window.location.href = "./inicio"
                }, 1600);
            }
        })
        .catch(err => {
            console.log("Tenemos un problema", err);
        })
        
    }
}
