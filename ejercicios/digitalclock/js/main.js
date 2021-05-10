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

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

setInterval(() => {
    const reloj = new Date();
    let hour = reloj.getHours();
    let minutes = reloj.getMinutes();
    let seconds = reloj.getSeconds();
    let day = days[reloj.getDay()];
    let month = months[reloj.getMonth()];
    let year = reloj.getFullYear();

    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');

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

    let points = ':';
    if (seconds % 2 === 0){
        else {points =' '}
    };

    h1.textContent = `${hour} ${points} ${minutes} ${points} ${seconds}`;
    h2.textContent = `${day} ${month} ${year}`;
}, 1000);
