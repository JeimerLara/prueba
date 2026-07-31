const reloj = document.getElementById('reloj');

function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.getHours() % 12 || 12; // Convertir a formato de 12 horas
    

    const horas =  String(hora).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const ampm = horas >= 12 ? 'a.m.' : 'p.m.'; 
    
    reloj.textContent = `${horas}:${minutos}:${segundos} ${ampm}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llamar inmediatamente para mostrar la hora al cargar la página