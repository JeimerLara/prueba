// ========================================
// Elementos del DOM
// ========================================

const container = document.getElementById('container');

// ========================================
// Constantes y variables
// ========================================

const fechaObjetivo = new Date('2027-01-01T00:00:00'); // Cambia esta fecha a tu objetivo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];


function calcularDiferencia(fechaInicio, fechaFin) {
    let años = fechaFin.getFullYear() - fechaInicio.getFullYear();
    let meses = fechaFin.getMonth() - fechaInicio.getMonth();
    let dias = fechaFin.getDate() - fechaInicio.getDate();
    let horas = fechaFin.getHours() - fechaInicio.getHours();
    let minutos = fechaFin.getMinutes() - fechaInicio.getMinutes();
    let segundos = fechaFin.getSeconds() - fechaInicio.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(fechaFin.getFullYear(), fechaFin.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        años--;
    }

    return { años, meses, dias, horas, minutos, segundos };
}



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

    container.innerHTML =
        `<div id="reloj" class="fecha">
    <h2>Fecha y Hora Actual</h2>
    <h3>${dS}, ${d} de ${m} de ${a}</h3>
    <h2>${hora}:${minutos}:${segundos} ${ampm}</h2>
    </div>`;
}

// ========================================
// Cuenta regresiva
// ========================================

function actualizarCuentaRegresiva() {
    const ahora = new Date();

    if (fechaObjetivo <= ahora) {
        container.innerHTML += `<div><h2>La fecha objetivo ya ha pasado.</h2></div>`;
        return;
    }

    const diferencia = calcularDiferencia(ahora, fechaObjetivo);

    const unidades = [['años', diferencia.años], ['meses', diferencia.meses], ['días', diferencia.dias], ['horas', diferencia.horas], ['minutos', diferencia.minutos], ['segundos', diferencia.segundos]];


    const primerUnidad = unidades.find(([, valor]) => valor !== 0);

    const mostrarUnidades = primerUnidad ? unidades.slice(unidades.indexOf(primerUnidad)) : [];

    container.innerHTML +=
        `<div>
        <h2>Cuenta Regresiva</h2>
        <div class ="countdown">
            ${mostrarUnidades.map(([unidad, valor]) => `<span><h4>${unidad}</h4><p>${valor}</p></span>`).join('')}
        </div>
    </div>`;
}

// ========================================
// Inicialización
// ========================================

function actualizar() {
    actualizarReloj();
    actualizarCuentaRegresiva();
}

actualizar(); // Llamada inicial para mostrar la hora y la cuenta regresiva inmediatamente

setInterval(actualizar, 1000);