import CalendarioReloj from "./calendarioReloj.js";

// ========================================
// Elementos del DOM
// ========================================

const container = document.getElementById('container');

// ========================================
// Constantes y variables
// ========================================

const fechaObjetivo = new Date(2027, 0, 1, 0, 0, 0); // Cambia esta fecha a tu objetivo


    const calendarioReloj = new CalendarioReloj();

// ========================================
// Reloj y fecha
// ========================================

function actualizarReloj(ahora) {

    const {diaSemanas, dia, mes, año, hora, minutos, segundos, ampm} = calendarioReloj.actualizarReloj(ahora);
    
    const htmlFecha = `<div class="fecha">
        <h2>${diaSemanas}, ${dia} de ${mes} de ${año}</h2>
    </div>`;

    const htmlReloj = `<div class="reloj">
        <h2>${hora}:${minutos}:${segundos} ${ampm}</h2>
    </div>`;

    return htmlFecha + htmlReloj;
}

// ========================================
// Cuenta regresiva
// ========================================

function actualizarCuentaRegresiva(ahora) {

    if (fechaObjetivo <= ahora) {
        return `<div><h2>La fecha objetivo ya ha pasado.</h2></div>`;
    }

    const mostrarUnidades = calendarioReloj.cuentaRegresiva(ahora, fechaObjetivo);

    const unidadesTotales = calendarioReloj.cuentaRegresivaTotal(ahora, fechaObjetivo);

    const html = mostrarUnidades.map(([nombre, valor]) => `<div>
            <h2>${valor}</h2>
            <h3>${nombre}</h3>
        </div>`).join('');

    const htmlTotales = unidadesTotales.map(([nombre, valor]) => `<div>
            <h2>${valor}</h2>
            <h3>${nombre}</h3>
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
