const rutaCorte = async(servicioId) => {
    const btn_servicio =  (`${servicioId}`);

    const endpoint = sessionStorage.getItem('urlsupra') + "/api/corte?id=" + btn_servicio;
    
    try {

        const respuesta = await fetch(endpoint);
        const data = await respuesta.json();
        
        if(data.body && data.body.length > 0){

            sessionStorage.setItem('corteData', JSON.stringify(data.body))
            window.location.href = "./reserva-corte"
        }else{
            console.log("No se encontraron los datos");
        }

    } catch (error) {
        console.log("Tenemos un problema", error);
    }
}

// lo que hace despues de dar click en el boton de siguiente 
const siguientePaso = () => {
    const corteData = sessionStorage.getItem('corteData')
    
    if (corteData === null || corteData === "") {
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

        appendAlert('No has seleccionado ningún servicio!', 'danger')
    }
     else {
        window.location.href = "./reserva-servicio"
    }
}

