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
            meses--;
            const ultimoDiaMesAnterior = new Date(fechaFin.getFullYear(), fechaFin.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }
        if (meses < 0) {
            meses += 12;
            años--;
        }

        return { años, meses, dias, horas, minutos, segundos };
    }

    // Calcula la diferencia total en días, horas, minutos y segundos
    calcularDiferenciaTotal(fechaInicio, fechaFin) {
        const diferencia = fechaFin.getTime() - fechaInicio.getTime(); // Diferencia en milisegundos

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
            ['Días', diferencia.totalDias],
            ['Horas', diferencia.totalHoras],
            ['Minutos', diferencia.totalMinutos],
            ['Segundos', diferencia.totalSegundos]
        ];

        const primerIndice = unidades.findIndex(([, valor]) => valor > 0);

        if (primerIndice === -1) {
            return [];
        }

        return unidades.slice(primerIndice).map(([nombre, valor]) => [nombre, valor.toLocaleString('es-CO')]);
    }

    // Cuenta regresiva
    cuentaRegresiva(ahora, fechaObjetivo) {
        const diferencia = this.calcularDiferencia(ahora, fechaObjetivo);

        const unidades = [
            ['Años', diferencia.años],
            ['Meses', diferencia.meses],
            ['Días', diferencia.dias],
            ['Horas', diferencia.horas],
            ['Minutos', diferencia.minutos],
            ['Segundos', diferencia.segundos]
        ];

        const primerIndice = unidades.findIndex(([, valor]) => valor > 0);

        if (primerIndice === -1) {
            return [];
        }
        return unidades.slice(primerIndice).map(([nombre, valor]) => [nombre, ['Horas', 'Minutos', 'Segundos'].includes(nombre) ? String(valor).padStart(2, '0') : valor]);
    }

    // Actualiza el reloj y la fecha
    actualizarReloj(ahora) {
        const hora24 = ahora.getHours();
        const hora12 = hora24 % 12 || 12; // Convertir a formato de 12 horas

        const fecha = {
            diaSemanas: this.#diaSemana[ahora.getDay()],
            dia: ahora.getDate(),
            mes: this.#meses[ahora.getMonth()],
            año: ahora.getFullYear()
        };

        const horas = {
            hora: String(hora12).padStart(2, '0'),
            minutos: String(ahora.getMinutes()).padStart(2, '0'),
            segundos: String(ahora.getSeconds()).padStart(2, '0'),
            ampm: hora24 >= 12 ? 'p.m.' : 'a.m.'
        };

        return { ...fecha, ...horas };
    }
}

export default CalendarioReloj;