import CalendarioReloj from "./calendarioReloj.js";

// ========================================
// Elementos del DOM
// ========================================

const container = document.getElementById('container');

// ========================================
// Constantes y variables
// ========================================

const fechaObjetivo = new Date('2027-01-01T00:00:00'); // Cambia esta fecha a tu objetivo


// ========================================
// Reloj y fecha
// ========================================

function actualizarReloj(ahora) {
    const calendarioReloj = new CalendarioReloj();

    const diaSemanas = calendarioReloj.actualizarReloj(ahora).diaSemanas;
    const dia = calendarioReloj.actualizarReloj(ahora).dia;
    const mes = calendarioReloj.actualizarReloj(ahora).mes;
    const año = calendarioReloj.actualizarReloj(ahora).año;
    const hora = calendarioReloj.actualizarReloj(ahora).hora;
    const minutos = calendarioReloj.actualizarReloj(ahora).minutos;
    const segundos = calendarioReloj.actualizarReloj(ahora).segundos;
    const ampm = calendarioReloj.actualizarReloj(ahora).ampm;
    
    const htmlFecha = `<div class="fecha">
        <span><h2>${diaSemanas}, ${dia} de ${mes} de ${año}</h2></span>
    </div>`;

    const htmlReloj = `<div class="reloj">
        <span><h2>${hora}:${minutos}:${segundos} ${ampm}</h2></span>
    </div>`;

    return htmlFecha + htmlReloj;
}

// ========================================
// Cuenta regresiva
// ========================================

function actualizarCuentaRegresiva(ahora) {
    const calendarioReloj = new CalendarioReloj();

    if (fechaObjetivo <= ahora) {
        return `<div><h2>La fecha objetivo ya ha pasado.</h2></div>`;
    }

    const mostrarUnidades = calendarioReloj.cuentaRegresiva(ahora, fechaObjetivo);

    const unidadesTotales = calendarioReloj.cuentaRegresivaTotal(ahora, fechaObjetivo);

    const html = mostrarUnidades.map(([nombre, valor]) => `<div>
            <span><h2>${valor}</h2></span>
            <span><h3>${nombre}</h3></span>
        </div>`).join('');

    const htmlTotales = unidadesTotales.map(([nombre, valor]) => `<div>
            <span><h2>${valor}</h2></span>
            <span><h3>${nombre}</h3></span>
        </div>`).join('');


    return `<h2>Cuenta Regresiva</h2> <div class="countdown">${html}</div> <h2>Total</h2> <div class="countdown">${htmlTotales}</div>`;
}

// ========================================
// Inicialización
// ========================================

function actualizar() {
    const ahora = new Date();

    container.innerHTML = `
        ${actualizarReloj(ahora)}
        ${actualizarCuentaRegresiva(ahora)}
    `;
}

actualizar(); // Llamada inicial para mostrar la hora y la cuenta regresiva inmediatamente

setInterval(actualizar, 1000);
