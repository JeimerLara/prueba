// ========================================
// Elementos del DOM
// ========================================

const reloj = document.getElementById('reloj');
const fecha = document.getElementById('fecha');

const contador = {
    meses: document.getElementById('meses'),
    dias: document.getElementById('dias'),
    horas: document.getElementById('horas'),
    minutos: document.getElementById('minutos'),
    segundos: document.getElementById('segundos')
};

// ========================================
// Constantes y variables
// ========================================

const fechaObjetivo = new Date('2027-01-01T00:00:00'); // Cambia esta fecha a tu objetivo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const segundos = 1000; // 1 segundo en milisegundos
const minutos = segundos * 60; // 1 minuto en milisegundos
const horas = minutos * 60; // 1 hora en milisegundos
const dias = horas * 24; // 1 día en milisegundos


// ========================================
// Reloj y fecha
// ========================================

function actualizarReloj() {
    const ahora = new Date();

    const hora24 = ahora.getHours();
    const hora12 = hora24 % 12 || 12; // Convertir a formato de 12 horas
    
    const dS = diaSemana[ahora.getDay()];
    const d = String(ahora.getDate()).padStart(2, '0');
    const m = meses[ahora.getMonth()];
    const a = ahora.getFullYear();

    const hora = String(hora12).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const ampm = hora24 >= 12 ? 'p.m.' : 'a.m.';

    fecha.textContent = `${dS}, ${d} de ${m} de ${a}`;
    reloj.textContent = `${hora}:${minutos}:${segundos} ${ampm}`;
}

// ========================================
// Cuenta regresiva
// ========================================

function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        Object.values(contador).forEach(element => {
            element.textContent = '00';
        });
        return;
    }

    const mesesRestantes = Math.floor(diferencia / (dias * 30));
    const diasRestantes = Math.floor((diferencia % (dias * 30)) / dias);
    const horasRestantes = Math.floor((diferencia % dias) / horas);
    const minutosRestantes = Math.floor((diferencia % horas) / minutos);
    const segundosRestantes = Math.floor((diferencia % minutos) / segundos);

    contador.meses.textContent = String(mesesRestantes).padStart(2, '0');
    contador.dias.textContent = String(diasRestantes).padStart(2, '0');
    contador.horas.textContent = String(horasRestantes).padStart(2, '0');
    contador.minutos.textContent = String(minutosRestantes).padStart(2, '0');
    contador.segundos.textContent = String(segundosRestantes).padStart(2, '0');
}

// ========================================
// Inicialización
// ========================================

actualizarReloj();
actualizarCuentaRegresiva();

setInterval(actualizarReloj, 1000);
setInterval(actualizarCuentaRegresiva, 1000);