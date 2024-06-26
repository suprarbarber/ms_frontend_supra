const escogerBarbero = (id_barbero) => {
    const idBarbero =  (`${id_barbero}`);

    sessionStorage.setItem("id_barbero", idBarbero);
    console.log(idBarbero);
}

// lo que hace despues de dar click en el boton de siguiente 
const siguientePaso = () => {
    const id_barber = sessionStorage.getItem('id_barbero')
    
    if (id_barber === null || id_barber === "") {

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
    }
     else {
        window.location.href = "./reserva-servicio"
    }
}