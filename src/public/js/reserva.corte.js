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
        }

    )}else{
        console.log("freddy");
    }

});
