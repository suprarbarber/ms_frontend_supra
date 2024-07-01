/**
 * Esta funcion es para mandar la información de los cortes en la reserva
 * @param {number|string} servicioId
 * @returns {void} - No retorna ningún valor.
 */

const rutaCorte = async(servicioId) => {
    const btn_servicio =  (`${servicioId}`);

    const endpoint = sessionStorage.getItem('urlsupra') + "/api/corte?id=" + btn_servicio;
    
    try {

        const respuesta = await fetch(endpoint);
        const data = await respuesta.json();
        
        if(data.body && data.body.length > 0){

            sessionStorage.setItem('corteData', JSON.stringify(data.body))
            sessionStorage.setItem('id_servicio', JSON.stringify(data.body[0].id_servicio))
            window.location.href = "./reserva-corte"
        }else{
            console.log("No se encontraron los datos");
        }

    } catch (error) {
        console.log("Tenemos un problema", error);
    }
}


