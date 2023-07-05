const formReserva = document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_ida = document.querySelector("#fechaIda");
const fecha_vuelta = document.querySelector("#fechaVuelta");
const pasajeros = document.querySelector("#pasajeros");
const telefono = document.querySelector("#telefono");
const email = document.querySelector("#email");

document.addEventListener("DOMContentLoaded", async () => {
  // Traemos la reserva que se va a editar
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_ida.value = data.fecha_ida;
  fecha_vuelta.value = data.fecha_vuelta;
  pasajeros.value = data.pasajeros;
  telefono.value = data.telefono;
  email.value = data.email;
});

formReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_ida: fecha_ida.value,
    fecha_vuelta: fecha_vuelta.value,
    pasajeros: pasajeros.value,
    telefono: telefono.value,
    email: email.value,
  };

  // Se envían los nuevos datos al servidor express
  const response = await fetch(`/api/'${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaActualizada),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  alert(data.message);

  // Redireccionar al usuario
  window.location.href = "/";

  const respToJson = await response.json();

  if (response.status !== 200) {
    return Swal.fire({
      title: "Error",
      text: respToJson.message,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  // Mostrar mensajes al usuario
  Swal.fire({
    title: "Reserva actualizada",
    text: respToJson.message,
    icon: "success",
    confirmButtonText: "Aceptar",
  });

  setTimeout(() => {
    // Redireccionar al usuario
    window.location.href = "/";
  }, 2000);
});
