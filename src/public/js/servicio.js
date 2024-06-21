const rutaCorte = async(servicioId) => {
    const btn_servicio =  (`${servicioId}`);

    const endpoint = sessionStorage.getItem('urlsupra') + "/api/corte?id=" + btn_servicio;
    
    try {

        const respuesta = await fetch(endpoint);
        const data = await respuesta.json()
        
        if(data.body && data.body.length > 0){
            sessionStorage.setItem('corteData', JSON.stringify(data.body))
            window.location.href = "./corte"
        }else{
            console.log("No se encontraron los datos");
        }

    } catch (error) {
        console.log("Tenemos un problema", error);
    }

}