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
    sessionStorage.setItem("new_id_horario", btn.id)
}

function finalizar() {
    const idHorario = sessionStorage.getItem('new_id_horario')
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

        appendAlert('No has seleccionado ningún turno!', 'danger')
    }else{
        const id_reserva = sessionStorage.getItem('id_reserva');
        const id_horario = sessionStorage.getItem('new_id_horario');
        const url = sessionStorage.getItem('urlsupra');

        const endpoint = url + "/api/cita"

        const options = {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                id_reserva : id_reserva,
                id_horario : id_horario
            })
        };

        fetch(endpoint, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.error == true){
                alertify.error('Algo está errado');
            }else{
                sessionStorage.removeItem('id_barbero') 
                sessionStorage.removeItem('id_corte')
                sessionStorage.removeItem('id_horario')
                sessionStorage.removeItem('id_servicio')
                sessionStorage.removeItem('corteData')

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Se ha guardado con exito!",
                    showConfirmButton: false,
                    timer: 1500
                });

                setTimeout(() => {
                    window.location.href = "./citas"
                }, 1600);
            }
        })
        .catch(err => {
            console.log("Tenemos un problema", err);
        })
        
    }
}
