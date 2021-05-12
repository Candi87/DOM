/**
 * ##############################################
 * ## toLocaleDateString && toLocaleTimeString ##
 * ##############################################
 *
 * Algunas propiedades del objeto Options y posibles valores:
 *
 *      - weekday: "long", "short", "narrow"
 *      - day: "numeric", "2-digit"
 *      - month: "numeric", "2-digit", "long", "short", "narrow"
 *      - year: "numeric", "2-digit"
 *      - hour: "numeric", "2-digit"
 *      - minute: "numeric", "2-digit"
 *      - second: "numeric", "2-digit"
 *
 * +info: https://medium.com/swlh/use-tolocaledatestring-to-format-javascript-dates-2959108ea020
 *
 */

const now = new Date();

const options_A = {
    weekday: 'long', // Día de la semana en letra.
    year: 'numeric', // Año en número.
    month: 'long', // Mes en letra.
    day: 'numeric', // Día del mes en número.
};

const options_B = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
};

const formatDate = now.toLocaleDateString('es-ES', options_A);

const formatTime = now.toLocaleTimeString('es-ES', options_B);

console.log('\nFecha formateada:', formatDate);

console.log('Hora formateada:', formatTime);
