/**
 * Crea un reloj que se actualice en tiempo real:
 *
 *  - La hora debe ir en el <h1>
 *  - La fecha debe ir en el <h2>
 *
 * En función de la hora del día la imagen de fondo debe cambiar.
 * Para este punto puedes ayudarte de las clases:
 *
 *  - morning: a partir de las 7:00.
 *
 *  - afternoon: a partir de las 13:00.
 *
 *  - night: a partir de las 21:00.
 *
 */

'use strict';

import { formatHour } from './helpers.js';

// Seleccionamos todos los nodos que queremos modificar.
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const body = document.body;

setInterval(() => {
    // Obtenemos la fecha actual.
    const now = new Date();

    // Obtenemos la hora, los minutos y los segundos.
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Asignamos la hora al h1.
    h1.textContent = formatHour(hours, minutes, seconds);

    // Obtener el día del mes, el mes y el año.
    const date = now.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // Asignamos la fecha al h2.
    h2.textContent = date;

    // Cambiamos la clase del body en función de la hora.
    if (hours >= 7 && hours < 13) {
        body.classList.remove('night');
        body.classList.add('morning');
    } else if (hours >= 13 && hours < 21) {
        body.classList.remove('morning');
        body.classList.add('afternoon');
    } else if (hours >= 21 || hours < 7) {
        body.classList.remove('afternoon');
        body.classList.add('night');
    }
}, 1000);
