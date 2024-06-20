const info = () => {
    const id = sessionStorage.getItem('id');

    const endpoint = sessionStorage.getItem('urlsupra') + "/api/cliente"

    console.log(endpoint);

    const options = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            id : id
        })
    };
}