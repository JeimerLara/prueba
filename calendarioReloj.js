// Calendario y Reloj

class CalendarioReloj {
     
    #diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    #meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // Calcula la diferencia entre la fecha actual y la fecha objetivo
    calcularDiferencia(fechaInicio, fechaFin) {
        
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

    // Calcula la diferencia total en días, horas, minutos y segundos
    calcularDiferenciaTotal(fechaInicio, fechaFin) {
        const diferencia = fechaFin - fechaInicio; // Diferencia en milisegundos

        const totalSegundos = Math.floor(diferencia / 1000);
        const totalMinutos = Math.floor(totalSegundos / 60);
        const totalHoras = Math.floor(totalMinutos / 60);
        const totalDias = Math.floor(totalHoras / 24);

        return { totalSegundos, totalMinutos, totalHoras, totalDias };
    }

    // Actualiza Cuenta Regresiva
    cuentaRegresivaTotal(ahora, fechaObjetivo) {
        const diferencia = this.calcularDiferenciaTotal(ahora, fechaObjetivo);

        const unidades = [
            ['Días', diferencia.totalDias.toLocaleString('es-CO')],
            ['Horas', diferencia.totalHoras.toLocaleString('es-CO')],
            ['Minutos', diferencia.totalMinutos.toLocaleString('es-CO')],
            ['Segundos', diferencia.totalSegundos.toLocaleString('es-CO')]
        ];

        const primerUnidad = unidades.find(([, valor]) => valor !== 0);

        const mostrarUnidades = primerUnidad ? unidades.slice(unidades.indexOf(primerUnidad)) : [];

        return mostrarUnidades;
    }

    // Cuenta regresiva
    cuentaRegresiva(ahora, fechaObjetivo) {
        const diferencia = this.calcularDiferencia(ahora, fechaObjetivo);

        const unidades = [
            ['Años', diferencia.años],
            ['Meses', diferencia.meses],
            ['Días', diferencia.dias],
            ['Horas', String(diferencia.horas).padStart(2, '0')],
            ['Minutos', String(diferencia.minutos).padStart(2, '0')],
            ['Segundos', String(diferencia.segundos).padStart(2, '0')]
        ];

        const primerUnidad = unidades.find(([, valor]) => valor !== 0);

        const mostrarUnidades = primerUnidad ? unidades.slice(unidades.indexOf(primerUnidad)) : [];

        return mostrarUnidades;
    }

    // Actualiza el reloj y la fecha
    actualizarReloj(ahora) {
        const hora24 = ahora.getHours();
        const hora12 = hora24 % 12 || 12; // Convertir a formato de 12 horas

        const diaSemanas = this.#diaSemana[ahora.getDay()];
        const dia = String(ahora.getDate()).padStart(2, '0');
        const mes = this.#meses[ahora.getMonth()];
        const año = ahora.getFullYear();

        const hora = String(hora12).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        const ampm = hora24 >= 12 ? 'p.m.' : 'a.m.';

        return { diaSemanas, dia, mes, año, hora, minutos, segundos, ampm };
    }
}

export default CalendarioReloj;