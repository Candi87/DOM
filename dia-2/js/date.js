'use strict';

// Obtenemos la fecha actual con "new Date()";
const now = new Date();

console.log('Fecha actual:', now);

// El método "miFecha.getFullYear()" devuelve el año.
console.log('\nAño de la fecha actual:', now.getFullYear());

// El método "miFecha.getMonth()" devuelve el mes.
// El primer mes es el 0.
console.log('\nMes de la fecha actual:', now.getMonth() + 1);

// El método "miFecha.getDay()" devuelve el día de la semana.
// El primer día es el 0 (Sunday) y el útlimo día es el 6 (Saturday).
console.log('\nDía de la semana de la fecha actual:', now.getDay());

// El método "miFecha.getDate()" devuelve el día del mes.
console.log('\nDía del mes de la fecha actual:', now.getDate());

// El método "miFecha.getHours()" devuelve las horas.
console.log('\nHora de la fecha actual:', now.getHours());

// El método "miFecha.getMinutes()" devuelve los minutos.
console.log('\nMinutos de la fecha actual:', now.getMinutes());

// El método "miFecha.getSeconds()" devuelve los segundos.
console.log('\nSegundos de la fecha actual:', now.getSeconds());

// El método "miFecha.getMilliseconds()" devuelve los milisegundos.
console.log('\nMilisegundos de la fecha actual:', now.getMilliseconds());

// Mostrar la hora actualizada segundo a segundo por consola.
const interval = setInterval(() => {
    const currentDate = new Date();

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    console.log(`${hour}:${minute}:${second}`);
}, 1000);

// Comente al clearInterval para ejecutar el reloj en consola.
clearInterval(interval);
