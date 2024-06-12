(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


export const registrar = async() => {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('email').value;
    const contra = document.getElementById('contrasena').value;
    const roll = document.getElementById('disabledSelect').value;
    const url = document.getElementById('url').value;


    sessionStorage.setItem("urlsupra", url);
    const urlsupra = sessionStorage.getItem('urlsupra') + "/api/registro"

    const options = {
        method : 'POST',
        Headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            id : id,
            nombre : nombre,
            telefono : telefono,
            correo : correo,
            clave : contra,
            roll : roll
        })
    };

    await fetch(urlsupra, options)
    .then(res => res.json())
    .then(data => {
        if(data.error == true){
            alertify.error('Error message');
        }else{
            sessionStorage.setItem("urlsupra", data.body.token)
        }
    })
    .catch(err => {
        console.log("Tenemos un problema", err);
    })
}

