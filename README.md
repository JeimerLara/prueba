# Reloj y Cuenta Regresiva

Aplicacion web estatica que muestra la fecha actual, un reloj en tiempo real y una cuenta regresiva hacia una fecha objetivo.

## Caracteristicas

- Muestra el dia de la semana, dia, mes y año actual.
- Actualiza la hora cada segundo en formato de 12 horas.
- Calcula una cuenta regresiva en años, meses, dias, horas, minutos y segundos.
- Muestra tambien el total restante en dias, horas, minutos y segundos.
- Usa JavaScript modular sin dependencias externas.

## Estructura del proyecto

```text
.
├── index.html
├── styles.css
├── app.js
└── calendarioReloj.js
```

- `index.html`: pagina principal y punto de carga de la aplicacion.
- `styles.css`: estilos visuales del reloj y la cuenta regresiva.
- `app.js`: inicializa la interfaz, actualiza el DOM y configura el intervalo de actualizacion.
- `calendarioReloj.js`: clase con la logica para calcular fechas, reloj y cuenta regresiva.

## Como ejecutar

Como el proyecto usa modulos de JavaScript, es recomendable abrirlo desde un servidor local.

Con Python:

```bash
python3 -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

## Personalizar la fecha objetivo

La fecha de la cuenta regresiva se configura en `app.js`:

```js
const fechaObjetivo = new Date(2027, 0, 1, 0, 0, 0);
```

En JavaScript, los meses empiezan en `0`, por eso `0` representa enero y `11` representa diciembre.

Ejemplo para el 25 de diciembre de 2026 a medianoche:

```js
const fechaObjetivo = new Date(2026, 11, 25, 0, 0, 0);
```

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Notas

El contenido se actualiza cada segundo con `setInterval`. Si la fecha objetivo ya paso, la aplicacion muestra un mensaje indicando que la fecha objetivo ya ha pasado.
