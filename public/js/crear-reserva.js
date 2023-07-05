const formCrearReserva = document.querySelector("#formNuevaReserva")

formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fecha_ida = document.querySelector('#fecha_ida').value;
    const fecha_vuelta = document.querySelector('#fecha_vuelta').value;
    const pasajeros = document.querySelector('#pasajeros').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;

    const reserva = {
         
        nombre,
        apellido,
        fecha_ida,
        fecha_vuelta,
        pasajeros,
        telefono,
        email
    }

    const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type': 'application/json' // Cuando se envían datos JSON al servidor
        }
    })
    
    const data = await response.json();

    alert(data.message)
    window.location.href = "/"


});
