const rutaCorte = (servicioId) => {
    const btn_servicio =  (`${servicioId}`);


    if(btn_servicio == 1 ){
        sessionStorage.setItem("servicio", btn_servicio)
        window.location.href = "./corte1"
    }
    
    if(btn_servicio == 2){
        sessionStorage.setItem("servicio", btn_servicio)
        // window.location.href = "./perfil"
    }
    
    if(btn_servicio == 3){
        sessionStorage.setItem("servicio", btn_servicio)
        // window.location.href = "./producto"
        
    }

}