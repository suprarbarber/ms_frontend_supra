const rutaCorte = (servicioId) => {
    const btn_servicio =  (`${servicioId}`);


    if(btn_servicio == 1 ){
        window.location.href = "./corte1"
    }
    if(btn_servicio == 2){
        window.location.href = "./perfil"
    }
    
    if(btn_servicio == 3){
        window.location.href = "./producto"
    }


}