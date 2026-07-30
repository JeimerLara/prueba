const reloj = document.getElementById('reloj');

function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llamar inmediatamente para mostrar la hora al cargar la página