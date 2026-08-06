const reloj = document.getElementById('reloj');
const fechaEl = document.getElementById('fecha');
const mesesEl = document.getElementById('meses');
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.getHours() % 12 || 12; // Convertir a formato de 12 horas
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const diaDeLaSemana = diaSemana[ahora.getDay()];
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = meses[ahora.getMonth()];
    const anio = ahora.getFullYear();
    const horas =  String(hora).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const ampm = horas >= 12 ? 'a.m.' : 'p.m.'; 
    
    fechaEl.textContent = `${diaDeLaSemana}, ${dia} de ${mes} de ${anio}`;
    reloj.textContent = `${horas}:${minutos}:${segundos} ${ampm}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llamar inmediatamente para mostrar la hora al cargar la página

function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const fechaObjetivo = new Date('2026-12-31T23:59:59'); // Cambia esta fecha a tu objetivo
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        mesesEl.textContent = '00';
        diasEl.textContent = '00';
        horasEl.textContent = '00';
        minutosEl.textContent = '00';
        segundosEl.textContent = '00';
        return;
    }

    const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = String(Math.floor((diferencia / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutos = String(Math.floor((diferencia / (1000 * 60)) % 60)).padStart(2, '0');
    const segundos = String(Math.floor((diferencia / 1000) % 60)).padStart(2, '0');

    mesesEl.textContent = meses;
    diasEl.textContent = dias;
    horasEl.textContent = horas;
    minutosEl.textContent = minutos;
    segundosEl.textContent = segundos;
}

setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva(); // Llamar inmediatamente para mostrar la cuenta regresiva al cargar la página