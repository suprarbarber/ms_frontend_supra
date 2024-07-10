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
            sessionStorage.setItem('id_dia', intDiaSelect)
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
    sessionStorage.setItem("id_turno", id_turno)
}

function finalizar() {
    const idHorario = sessionStorage.getItem('id_turno')
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
        const id = sessionStorage.getItem('id');
        const id_barbero = sessionStorage.getItem('id_barbero');
        const id_turno = sessionStorage.getItem('id_turno');
        const id_dia = sessionStorage.getItem('id_dia');
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
                id_turno : id_turno,
                id_servicio : id_servicio,
                id_corte : id_corte,
                id_fecha :  id_dia
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
                sessionStorage.removeItem('id_turno')
                sessionStorage.removeItem('id_servicio')
                sessionStorage.removeItem('corteData')
                sessionStorage.removeItem('id_dia')

                Swal.fire({
                    title: "Custom width, padding, color, background.",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("https://res.cloudinary.com/dfuizwycd/image/upload/v1720575399/dhiren1234-unscreen_o3ofxz.gif")
                      left top
                      no-repeat
                    `
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
