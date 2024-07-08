const diaActual = document.querySelector('.dia-actual');
const mes = document.querySelector('.mes');
const ano = document.querySelector('.ano');

const diaTag = document.querySelector('.num-dias');
const nextIcon = document.querySelectorAll('.btn-next');
const prevIcon = document.querySelectorAll('.btn-prev');

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

    for (let i = primerDiaMes; i > 0; i--) {
        liTag += `<li id="01" class="inactivos">${ultimoFechaUltimoMes - i + 1}</li>`;
    }

    for (let i = 1; i <= ultimoFechaMes; i++) {
        let hoy = i === fecha.getDate() && actualMes === new Date().getMonth() && actualAno === new Date().getFullYear() ? 'dia-actual' : "";
        liTag += `<li class="${hoy}" id="dia-${i}">${i}</li>`;
    }

    for (let i = ultimoDiaMes; i < 6; i++) {
        liTag += `<li id="01" class="inactivos">${i - ultimoDiaMes + 1}</li>`;
    }

    mes.innerText = `${meses[actualMes]}`;
    ano.innerText = `${actualAno}`;
    diaTag.innerHTML = liTag;
    
    liTag.addEventListener('click', () => {
        let clickedDay = parseInt(day.innerText);
        let clickedDate = new Date(actualAno, actualMes, clickedDay);

        if (clickedDate < new Date()) {
            localStorage.setItem('dia', 'true');
        } else {
            localStorage.setItem('clickedPastDate', 'false');
        }
    });
    
};

renderCalendario();

nextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        actualMes = actualMes + 1;

        if (actualMes > 11) {
            actualMes = 0;
            actualAno += 1;
        }

        renderCalendario();
    });
});

prevIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        actualMes = actualMes - 1;

        if (actualMes < 0) {
            actualMes = 11;
            actualAno -= 1;
        }

        renderCalendario();
    });
});


































// const diaActual = document.querySelector('.dia-actual');
// const mes = document.querySelector('.mes');
// const ano = document.querySelector('.ano');

// const diaTag = document.querySelector('.num-dias')
// const nextIcon = document.querySelectorAll('.btn-next')
// const prevIcon = document.querySelectorAll('.btn-prev')

// // trae la fecha, el mes, y el año actual 
// let fecha = new Date();
// actualAno = fecha.getFullYear();
// actualMes = fecha.getMonth();

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
//     'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
// ];

// const renderCalendario = () => {
//     // trae el último dia del mes 
//     let primerDiaMes = new Date(actualAno, actualMes, 1).getDay(), //captura el primer dia del mes
//     ultimoFechaMes = new Date(actualAno, actualMes + 1, 0).getDate(), //captura ultima fecha del mes
//     ultimoDiaMes = new Date(actualAno, actualMes, ultimoFechaMes).getDay(), //captura ultimo dia del mes
//     ultimoFechaUltimoMes = new Date(actualAno, actualMes, 0).getDate() //captura ultima fecha del anterior mes
//     let liTag = '';

//     for (let i = primerDiaMes; i > 0; i--){
//         liTag += `<li class="inactivos">${ultimoFechaUltimoMes - i + 1}</li>`     
//     }
    
//     for (let i = 1; i <= ultimoFechaMes ; i++) {
//         let hoy = i === fecha.getDate() && actualMes === new Date().getMonth() 
//         && actualAno === new Date().getFullYear() ? 'dia-actual' : "";

        
//         liTag += `<li id="misDias" class="${hoy}">${i}</li>`
//     }
//     for (let i = ultimoDiaMes; i < 6 ; i++) {
//         liTag += `<li id="01" class="inactivos">${ i - ultimoDiaMes + 1}</li>`     
//     }

//     mes.innerText = `${meses[actualMes]}`;
//     ano.innerText =  `${actualAno}`
//     diaTag.innerHTML = liTag;

//     // Agregar eventos de click a cada día
//     document.querySelectorAll('.num-dias li').forEach(day => {
//         day.addEventListener('click', () => {
//             let clickedDay = parseInt(day.innerText);
//             let clickedDate = new Date(actualAno, actualMes, clickedDay);

//             if (clickedDate < new Date()) {
//                 localStorage.setItem('id_dia', 'true');
//             } else {
//                 localStorage.setItem('id_dia', 'false');
//             }
//         });
//     });
// }
// renderCalendario();

// nextIcon.forEach(icon => {
//     icon.addEventListener('click', () => {
//         actualMes = icon.id === "next" ? actualMes + 1 : actualMes - 1;

//         if(actualMes < 0 || actualMes > 11){
//             fecha = new Date(actualAno, actualMes);
//             actualAno = fecha.getFullYear();
//             actualMes = fecha.getMonth();
//         }else{
//             fecha = new Date();
//         }

//         renderCalendario(); 
//     })
// });


// prevIcon.forEach(icon => {
//     icon.addEventListener('click', () => {
//         actualMes = icon.id === "prev" ? actualMes - 1 : actualMes + 1;

//         if(actualMes < 0 || actualMes > 11){
//             fecha = new Date(actualAno, actualMes);
//             actualAno = fecha.getFullYear();
//             actualMes = fecha.getMonth();
//         }else{
//             fecha = new Date();
//         }

//         renderCalendario(); 
//     })
// });