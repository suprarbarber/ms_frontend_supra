const lis = document.querySelector('.num-dias').getElementsByTagName('li');

[].forEach.call(lis, element => {
    element.addEventListener('click', () => {
        let ano = document.querySelector('.ano');
        let mes = document.querySelector('.mes');
        element.className = 'seleccionado';
        let fechaHoy = sessionStorage.getItem('fechaHoy');
        let fechaFresh = JSON.parse(fechaHoy)[0];

        let intDia = parseInt(fechaFresh.day); //hoy       
        let intMes = parseInt(fechaFresh.month); //hoy    
        let intAno = parseInt(fechaFresh.year); //hoy

        console.log(mes.id);
        let intDiaSelect = parseInt(element.id); //seleccionado
        let intMesSelect = parseInt(mes.id) + 1; //selccionado
        let intAnoSelect = parseInt(ano.innerText); //seleccionado

        let fechaHoyDate = new Date(intAno, intMes - 1, intDia);
        let fechaSeleccionadaDate = new Date(intAnoSelect, intMesSelect - 1, intDiaSelect);


        if(fechaSeleccionadaDate < fechaHoyDate){
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "La fecha ya ha pasado",
              timer: 1500
            });
            element.className = 'noseleccionado'
        }else{
            sessionStorage.setItem('new_id_dia', intDiaSelect)
        }
        
        console.log(intDiaSelect, intMesSelect, intAnoSelect);
    
        console.log(intDia, intMes , intAno)

    });
});

/**
 * Esta funcion es para obtener el id del boton
 * @param {number|string} btn contiene informacion del boton
 */
function turno(btn) {
    const id_turno = btn.id;
    sessionStorage.setItem("new_id_turno", btn.id)
}


function finalizar() {
    const idDia = sessionStorage.getItem('new_id_dia')
    const idTurno = sessionStorage.getItem("new_id_turno")

    if(idDia === null || idTurno === null){
        
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
        
        appendAlert('Debes seleccionar la fecha y el turno!', 'danger')
    

    }else{
        const idReserva = sessionStorage.getItem('id_reserva');
        const idTurno = sessionStorage.getItem('new_id_turno');
        const url = sessionStorage.getItem('urlsupra');

        const endpoint = url + "/api/cita"

        const options = {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                id_reserva : idReserva,
                id_turno : idTurno,
                id_fecha : idDia
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
