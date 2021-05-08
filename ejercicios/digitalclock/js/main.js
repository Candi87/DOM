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
const body = document.body;

setInterval(() => {
    const reloj = new Date();
    let hour = reloj.getHours();
    let minutes = reloj.getMinutes();
    let seconds = reloj.getSeconds();

    if (hour >= 7 && hour < 13) {
        body.classList.add('morning');
    } else if (hour >= 13 && hour < 21) {
        body.classList.remove('morning'), body.classList.add('afternoon');
    } else {
        body.classList.remove('afternoon'), body.classList.add('night');
    }

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hour = hour < 10 ? '0' + hour : hour;

    console.log(`${hour}:${minutes}:${seconds}`);
}, 1000);
