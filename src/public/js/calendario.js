
const mes = document.querySelector('.mes');
const ano = document.querySelector('.ano');

const diaTag = document.querySelector('.num-dias');
const nextIcon = document.querySelector('.btn-next');
const prevIcon = document.querySelector('.btn-prev');

// Trae la fecha, el mes y el año actual 
let fecha = new Date();
let actualAno = fecha.getFullYear();
let actualMes = fecha.getMonth();

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const renderCalendario = () => {
    // Trae el último día del mes 
    let primerDiaMes = new Date(actualAno, actualMes, 1).getDay(); // captura el primer día del mes
    let ultimoFechaMes = new Date(actualAno, actualMes + 1, 0).getDate(); // captura la última fecha del mes
    let ultimoDiaMes = new Date(actualAno, actualMes, ultimoFechaMes).getDay(); // captura el último día del mes
    let ultimoFechaUltimoMes = new Date(actualAno, actualMes, 0).getDate(); // captura la última fecha del mes anterior
    let liTag = '';

    // mes pasado 
    for (let i = primerDiaMes; i > 0; i--) {
        liTag += `<li class="inactivos" id='${ultimoFechaUltimoMes - i + 1}'>${ultimoFechaUltimoMes - i + 1}</li>`;
    }

    // mi mes
    for (let i = 1; i <= ultimoFechaMes; i++) {
        let hoy = i === fecha.getDate() && actualMes === new Date().getMonth() && actualAno === new Date().getFullYear() ? 'dia-actual' : "";

        if(i === fecha.getDate() && actualMes === new Date().getMonth() && actualAno === new Date().getFullYear()){

            const selectedDate = [{
                day: fecha.getDate(),
                month: fecha.getMonth() + 1, // Months are zero-indexed (January is 0)
                year: fecha.getFullYear()
            }];
            
            const fechaFresh = JSON.stringify(selectedDate)

            sessionStorage.setItem('fechaHoy', fechaFresh)
            
        }
            
        liTag += `<li class="${hoy}" id="${i}">${i}</li>`;

        
    }

    // siguiente mes 
    for (let i = ultimoDiaMes; i < 6; i++) {
        liTag += `<li class="inactivos" id='${i - ultimoDiaMes + 1}'>${i - ultimoDiaMes + 1}</li>`;
    }

    mes.innerText = `${meses[actualMes]}`;
    mes.id = actualMes;
    ano.innerText = `${actualAno}`;
    diaTag.innerHTML = liTag;

};

renderCalendario();

nextIcon.addEventListener('click', () => {
    actualMes = actualMes + 1;

    if (actualMes > 11) {
        actualMes = 0;
        actualAno += 1;
    }

    renderCalendario();
});

prevIcon.addEventListener('click', () => {
    actualMes = actualMes - 1;

    if (actualMes < 0) {
        actualMes = 11;
        actualAno -= 1;
    }

    renderCalendario();
});





