/**
 * Funcion para mostrar los cortes
 */
document.addEventListener('DOMContentLoaded', () => {
    
    cuerpo = document.getElementById('cuerpo');
    const corteData = JSON.parse(sessionStorage.getItem('corteData'));

    if(corteData && corteData.length > 0){
        corteData.forEach(item => {
            const corte = document.createElement('button');
            corte.className = 'btn btn-dark text-center mx-2 my-2';
            corte.id = 'corte';

            const imagen = document.createElement('img');
            imagen.className = 'mt-2 rounded';
            imagen.src = './img/usuario.png';
            imagen.width = 90;
            imagen.height = 95;
            imagen.id = 'imagen';


            const nombreCorte = document.createElement('h3');
            nombreCorte.className = 'fs-4 mt-2';
            nombreCorte.id = 'nombreCorte';
            nombreCorte.innerText = item.nombre


            corte.appendChild(imagen)
            corte.appendChild(nombreCorte)
            cuerpo.appendChild(corte)

            corte.addEventListener("click", function() {
                sessionStorage.setItem('id_corte', item.id_corte)
            })

        }

    )}else{
        console.log("No se encontraron datos");

    }
});


// lo que hace despues de dar click en el boton de siguiente
/**
 * Funcion del boton siguiente de los barberos en la reserva
 */ 
const siguientePaso = () => {
    const id_corte = sessionStorage.getItem('id_corte')
    
    if (id_corte === null || id_corte === "") {
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
