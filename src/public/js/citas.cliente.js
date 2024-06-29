document.addEventListener('DOMContentLoaded', () => {
    const id = sessionStorage.getItem('id');
    const url = sessionStorage.getItem('urlsupra');
    
    const recurso = url + `/api/cita?id=${id}`
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        let datos = "";
        datos = data.body;


        datos.forEach(item => {
            const reservas = document.getElementById('citas')

            const cita = document.createElement('div');
            cita.className = 'row'
            cita.id = 'cita'

            const colEstado = document.createElement('div');
            colEstado.className = 'col-2 text-center'

            const tituEstado = document.createElement('h6');
            tituEstado.className = ''
            tituEstado.textContent = 'Estado'

            const estado = document.createElement('p');
            estado.className = ''
            estado.textContent = item.estado_reserva

            const colFecha = document.createElement('div');
            colFecha.className = 'col-2 text-center '

            const tituFecha = document.createElement('h6');
            tituFecha.className = ''
            tituFecha.textContent = 'Fecha'

            const fechaISO = item.fecha;
            const campofecha = fechaISO.split('T')[0];
            const fecha = document.createElement('p');
            fecha.className = ''
            fecha.textContent = campofecha

            const colTurno = document.createElement('div');
            colTurno.className = 'col-2 text-center '

            const tituTurno = document.createElement('h6');
            tituTurno.className = ''
            tituTurno.textContent = 'Turno'

            const turno = document.createElement('p');
            turno.className = ''
            turno.textContent = item.turno
            
            const colCorte = document.createElement('div');
            colCorte.className = 'col-2 text-center '

            const tituCorte = document.createElement('h6');
            tituCorte.className = ''
            tituCorte.textContent = 'Corte'

            const corte = document.createElement('p');
            corte.className = ''
            corte.textContent = item.corte

            const colBarbero = document.createElement('div');
            colBarbero.className = 'col-2 text-center '

            const imgBarbero = document.createElement('img');
            imgBarbero.className = 'mt-2 rounded';
            imgBarbero.src = './img/usuario.png';
            imgBarbero.width = 50;
            imgBarbero.id = 'imagen';

            const barbero = document.createElement('p');
            barbero.className = ''
            barbero.textContent = item.barbero

            const colBotones = document.createElement('div');
            colBotones.className = 'col-2'

            const btnReprogramar = document.createElement('button')
            btnReprogramar.className = 'btn btn-info p-2 mb-2'
            btnReprogramar.textContent = 'Reprogramar'
            btnReprogramar.id = 'btnReprogramar'
            
            const btnCarcelar = document.createElement('button')
            btnCarcelar.className = 'btn btn-danger p-2'
            btnCarcelar.textContent = 'Cancelar'
            btnCarcelar.id = 'btnCancelar'

            


            colBotones.appendChild(btnReprogramar)
            colBotones.appendChild(btnCarcelar)

            colBarbero.appendChild(imgBarbero)
            colBarbero.appendChild(barbero)

            colCorte.appendChild(tituCorte)
            colCorte.appendChild(corte)

            colTurno.appendChild(tituTurno)
            colTurno.appendChild(turno)

            colFecha.appendChild(tituFecha)
            colFecha.appendChild(fecha)

            colEstado.appendChild(tituEstado)
            colEstado.appendChild(estado)

            cita.appendChild(colEstado)
            cita.appendChild(colFecha)
            cita.appendChild(colTurno)
            cita.appendChild(colCorte)
            cita.appendChild(colBarbero)
            cita.appendChild(colBotones)
            reservas.appendChild(cita)
            
        });

    })
})