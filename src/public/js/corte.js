document.addEventListener('DOMContentLoaded', () => {
    // console.log('La página de perfil se ha cargado');
    
    const mainCuerpo = document.getElementById('mainCuerpo');
    const corteData = JSON.parse(sessionStorage.getItem('corteData'));

    if(corteData && corteData.lenght > 0){
        
        corteData.forEach(item => {

            const cuerpo = document.createElement('div');
            cuerpo.className = 'col-md-12';
            cuerpo.id = 'cuerpo';

            const corte = document.createElement('div');
            corte.className = 'btn text-light text-center mx-2 my-2';
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
            mainCuerpo.appendChild(cuerpo)

        })
    }

});
