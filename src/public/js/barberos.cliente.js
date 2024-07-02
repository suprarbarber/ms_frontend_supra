document.addEventListener('keyup', function(e) {
    if(e.target.matches('#buscador')){

        document.querySelectorAll('#barber').forEach(element => {
            element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?element.classList.remove('filtro')
            :element.classList.add('filtro')
        });
    }
});